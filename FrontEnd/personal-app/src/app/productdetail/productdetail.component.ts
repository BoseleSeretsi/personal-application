import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  products: any; 

  constructor( private route: ActivatedRoute, private productService: ProductsService
  ) {}


  ngOnInit() {
    this.getProductDetails();
  }

  // showDetails(product: Products) {
  //   this.router.navigate(['product-details'], { state: { selectedProduct: product } });
  // }

  getProductDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const productId = +id; // Convert id to a number
      this.productService.getProductById(productId)
        .subscribe(
          (data: Products) => {
            this.products = data;
            // Perform additional operations if needed
          },
          (error: any) => {
            console.error(error);
          }
        );
    }
  }
}