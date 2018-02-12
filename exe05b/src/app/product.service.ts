import {Product} from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running shoes',
        '/assets/images/products/black-shoe.jpg',
        ['men', 'Shoes', 'Running'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Black running shoes',
        '/assets/images/products/blue-jacket.jpg',
        ['WOMEN', 'Apparel', 'Jackets & vests'],
        98.99
      ),
      new Product(
        'NICEHAT',
        'A nice black hat running shoes',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        38.99
      )
    ];
   }

   getProduct(): Product[] {
     return this.products;
   }
   deleteProduct(product: Product) {
    console.log('application', product);
    this.products = this.products.filter(item => item !== product);
  }

}
