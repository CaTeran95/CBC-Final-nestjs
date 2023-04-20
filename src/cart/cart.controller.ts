import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { Cart } from './interfaces/cart/cart.interface';
import { CartService } from './cart.service';
import { AddProductToCartDTO } from './dto/add-product-to-cart.dto';
import { DeleteProductFromCart } from './dto/delete-product-from-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(): Promise<Cart> {
    return this.cartService.createCart();
  }

  @Get(':UUID')
  async getCart(@Param('UUID') UUID: string): Promise<Cart> {
    return this.cartService.getCart(UUID);
  }

  @Put(':cartUUID')
  async addProduct(
    @Body() addProductToCartDTO: AddProductToCartDTO,
    @Param('cartUUID') cartUUID: string,
  ): Promise<Cart> {
    const { productUUID, qty } = addProductToCartDTO;
    return this.cartService.setProductOnCart(cartUUID, productUUID, qty);
  }

  @Delete(':cartUUID')
  async deleteProduct(
    @Body() deleteProductFromCart: DeleteProductFromCart,
    @Param('cartUUID') cartUUID: string,
  ): Promise<Cart> {
    const { productUUID } = deleteProductFromCart;
    return this.cartService.deleteProductFromCart(cartUUID, productUUID);
  }
}
