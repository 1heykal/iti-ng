import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categories: ICategory[];
  message: string = '';
  newProduct: IProduct = {} as IProduct;

  constructor(private productService: ProductsService, private router: Router) {
    this.categories = [
      {
        id: 1,
        name: "Laptops"
      },
      {
        id: 2,
        name: "tablets"
      },
      {
        id: 3,
        name: "Mobiles"
      }
    ]
  }



  ngOnInit(): void {

  }

  addProduct() {
   
    this.productService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        this.message = `Product with ${product.id} added successfully`;
      },
      error: (error) => {
        this.message = error;//.message
      },
    });
  }
}
