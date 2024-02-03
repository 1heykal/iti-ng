import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
  categories: ICategory[];

  selectedCategoryId: number = 0;
 orderTotalPrice: number = 0;

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
}
