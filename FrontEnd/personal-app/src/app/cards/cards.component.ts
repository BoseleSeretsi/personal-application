import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.html']
})
export class CardsComponent implements OnInit {
  products: any

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data:any) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.getProducts();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
