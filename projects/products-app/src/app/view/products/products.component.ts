import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/functional/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

}
