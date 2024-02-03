import { Component, OnInit, Input, OnChanges, Output} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

  products: IProduct[];
  @Output() orderTotalPrice = 0;
   orderDate: Date;
   PrdListOfCategory: IProduct[] = [];

  @Input() sentCategoryId : number = 0;


  constructor() {
    this.orderDate = new Date()
   
    this.products = [
      {
        id: 100,
        name: "Lenovo laptop",
        price: 5008880,
        quantity: 2,
        imageURL: "https://picsum.photos/100",
        categoryID: 1
      },
      {
        id: 201,
        name: "Samsung phone",
        price: 32777500,
        quantity: 5,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 401,
        name: "Xiaomi phone",
        price: 7575755,
        quantity: 0,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 601,
        name: "Redmi phone",
        price: 2055500,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 710,
        name: "Iphone phone",
        price: 15005550,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      }, {
        id: 510,
        name: "Tablet 13",
        price: 3005800,
        quantity: 1,
        imageURL: "https://picsum.photos/100",
        categoryID: 3
      },
      {
        id: 510,
        name: "Tablet 13 pro",
        price: 300857500,
        quantity: 0,
        imageURL: "https://picsum.photos/100",
        categoryID: 3
      },
    ]

    

    this.PrdListOfCategory= this.products;
  }


  ngOnChanges(): void {
    this.filterProductsByCatId()
  }



  ngOnInit(): void {

  }

  buy(productPrice: number, count: any): void {
    this.orderTotalPrice += Number(count) * productPrice;
  }

 
  productsTrackByFn(index: number, prod:IProduct) : number{
    return prod.id;
  }

  private filterProductsByCatId(){
    this.PrdListOfCategory = this.sentCategoryId == 0? this.products : this.products.filter(p => p.categoryID == this.sentCategoryId);
  }
}
