import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

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
    this.custNameInpElem.nativeElement.value = "Your name here..";
    this.custNameInpElem.nativeElement.style.border = "2px solid red";
  }

  onTotalOriceChanged(totalPrice: number){
    this.receivedOrderTotalPrice = totalPrice;
  }
}
