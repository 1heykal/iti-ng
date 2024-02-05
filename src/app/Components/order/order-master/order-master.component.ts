import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements AfterViewInit{
  categories: ICategory[];

  selectedCategoryId: number = 0;
  receivedOrderTotalPrice: number = 0;

  @ViewChild('customerName') custNameInpElem!: ElementRef;
  @ViewChild(ProductListComponent) productListComObj!: ProductListComponent;

  constructor(){
    this.categories = [
      {
        id: 1,
        name: "Laptops"
      },
      {
        id: 2,
        name: "SmartPhones"
      },
      {
        id: 3,
        name: "Tablet"
      }
    ];
  }

  ngAfterViewInit(): void {
    this.custNameInpElem.nativeElement.placeholder = "Your name here..";
    this.custNameInpElem.nativeElement.style.border = "2px solid red";
   // console.log(this.productListComObj.products);
  }

  onTotalOriceChanged(totalPrice: number){
    this.receivedOrderTotalPrice = totalPrice;
  }
  completeOrder(){
    this.productListComObj.products[0].quantity -= 1;
  }
}
