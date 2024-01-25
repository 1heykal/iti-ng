import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  orderTotalPrice = 0;

  constructor() {
    this.products = [
      {
        id: 100,
        name: "Lenovo laptop",
        price: 5000,
        quantity: 2,
        imageURL: "https://picsum.photos/100",
        categoryID: 1
      },
      {
        id: 201,
        name: "Samsung phone",
        price: 3200,
        quantity: 5,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 401,
        name: "Xiaomi phone",
        price: 4000,
        quantity: 6,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 601,
        name: "Redmi phone",
        price: 2000,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 710,
        name: "Iphone phone",
        price: 15000,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },{
        id: 510,
        name: "Iphone 13",
        price: 30000,
        quantity: 10,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
]
  }



  ngOnInit(): void {

  }

  buy(productPrice: number, count: any) : void{
     this.orderTotalPrice += Number(count) * productPrice;
  }

}
