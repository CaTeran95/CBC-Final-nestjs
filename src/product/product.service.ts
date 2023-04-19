import { Injectable } from '@nestjs/common';

import { Product } from './interfaces/product.interface';
import { UpdateProductDTO } from './dto/update-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [
    {
      UUID: '7235b837-4498-472b-8fb6-ef1e98dc93f3',
      title: 'Notebook',
      price: 56.78,
      stock: 8,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/office-equipment-19/64/files-address_book-bookmark-journal-notebook-agenda-256.png',
    },
    {
      UUID: '562c1689-2788-4d9f-9bb9-fb8b49baef2e',
      title: 'PS4 Dualshock',
      price: 368.89,
      stock: 9,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/video-games-37/512/Sega_Genesis-256.png',
    },
    {
      UUID: '36f7c82e-e416-44d5-ab14-9847a500f72f',
      title: 'Plancha',
      price: 265.99,
      stock: 3,
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/solid-amenities-icon-set/64/Iron_2-256.png',
    },
  ];

  create(product: CreateProductDTO) {
    const newProduct = { ...product, UUID: uuidv4() };
    this.products.push(newProduct);
  }

  findAll(): Product[] {
    return this.products;
  }

  findProductByUUID(UUID: string): Product {
    const product = this.products.find((item) => item.UUID === UUID);
    return product;
  }

  updateProduct(UUID: string, features: UpdateProductDTO): Product {
    const product = this.products.find((item) => item.UUID === UUID);
    Object.assign(product, { ...features });
    return product;
  }

  deleteProduct(UUID: string): Product {
    let deletedProduct: Product;
    const productIndex = this.products.findIndex((item) => item.UUID === UUID);
    if (productIndex !== -1) {
      deletedProduct = this.products[productIndex];
      this.products.splice(productIndex, 1);
    }
    return deletedProduct;
  }
}
