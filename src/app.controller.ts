import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('pages/products')
  root() {
    return { title: 'Products', amount: 'Stock' };
  }
}
