import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

  products: IProduct[];
  orderTotalPrice = 0;
   orderDate: Date;
   PrdListOfCategory: IProduct[] = [];

  @Input() sentCategoryId : number = 0;

  @Output() totalPriceChanged : EventEmitter<number>;


  constructor() {

    this.totalPriceChanged = new EventEmitter<number>();

    this.orderDate = new Date()
   
    this.products = [
      {
        id: 100,
        name: "Lenovo laptop",
        price: 20080,
        quantity: 2,
        imageURL: "https://picsum.photos/100",
        categoryID: 1
      },
      {
        id: 201,
        name: "Samsung phone",
        price: 3270,
        quantity: 5,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 401,
        name: "Xiaomi phone",
        price: 7500,
        quantity: 0,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 601,
        name: "Redmi phone",
        price: 7000,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      },
      {
        id: 710,
        name: "Iphone phone",
        price: 30000,
        quantity: 3,
        imageURL: "https://picsum.photos/100",
        categoryID: 2
      }, {
        id: 510,
        name: "Tablet 13",
        price: 3500,
        quantity: 1,
        imageURL: "https://picsum.photos/100",
        categoryID: 3
      },
      {
        id: 510,
        name: "Tablet 13 pro",
        price: 10000,
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
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

 
  productsTrackByFn(index: number, prod:IProduct) : number{
    return prod.id;
  }

  private filterProductsByCatId(){
    this.PrdListOfCategory = this.sentCategoryId == 0? this.products : this.products.filter(p => p.categoryID == this.sentCategoryId);
  }
}
