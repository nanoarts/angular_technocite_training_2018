import { Component } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-inventory-root',
  template: `
  <div class="inventory-app">
    <app-products-list [productList]="this.productService.getProduct()"></app-products-list>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  constructor(public productService: ProductService) {

  }


}
