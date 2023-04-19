import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDTO: CreateProductDTO) {
    this.productService.create(createProductDTO);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':UUID')
  async findProductByUUID(@Param('UUID') UUID: string): Promise<Product> {
    return this.productService.findProductByUUID(UUID);
  }

  @Put(':UUID')
  async updateProduct(
    @Body() updateProductDTO: UpdateProductDTO,
    @Param('UUID') UUID: string,
  ): Promise<Product> {
    return this.productService.updateProduct(UUID, updateProductDTO);
  }

  @Delete(':UUID')
  async deleteProduct(@Param('UUID') UUID: string): Promise<Product> {
    return this.productService.deleteProduct(UUID);
  }
}
