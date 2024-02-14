import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  message: string = '';
  constructor(private productService: ProductsService, private router: Router){

  }

  ngOnInit(): void {
   
  }



  addProduct(){
    const product = {
      id: 1000,
      name: 'Mobile',
      price: 6000,
      categoryID: 3,
      quantity: 6,
      imageURL: 'assets/csharp.png'
    }
    this.productService.addProduct(product).subscribe({
      next: (product)=> {
        this.message = `Product with ${product.id} added successfully`;
      },
      error: (error) => {
        this.message = error;//.message
      },
    });
  }
}
