import { Injectable } from '@nestjs/common';
import { Cart } from './interfaces/cart/cart.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CartService {
  private readonly carts: Cart[] = [];

  createCart() {
    const newCart: Cart = {
      UUID: uuidv4(),
      products: {},
    };
    this.carts.push(newCart);
    return newCart;
  }

  getCart(UUID: string): Cart {
    return this.carts.find((item) => item.UUID === UUID);
  }

  setProductOnCart(cartUUID: string, productUUID: string, qty: number): Cart {
    const cart = this.carts.find((item) => item.UUID === cartUUID);
    const currentQty = cart.products[productUUID];
    if (currentQty) {
      cart.products[productUUID] += qty;
    } else {
      cart.products[productUUID] = qty;
    }
    return cart;
  }

  deleteProductFromCart(cartUUID: string, productUUID: string): Cart {
    const cart = this.carts.find((item) => item.UUID === cartUUID);
    if (cart) {
      console.log('Product UUID:', productUUID);
      const currentQty = cart.products[productUUID];
      console.log('Qty:', currentQty);
      if (currentQty) delete cart.products[productUUID];
      console.log('Cart:', cart);
      return cart;
    }
    return;
  }
}
