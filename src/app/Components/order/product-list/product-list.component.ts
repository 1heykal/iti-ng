import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

  products: IProduct[] = [];
  orderTotalPrice = 0;
   orderDate: Date;
   PrdListOfCategory: IProduct[] = [];

  @Input() sentCategoryId : number = 0;
  @Output() totalPriceChanged : EventEmitter<number>;


  constructor(private productsService: StaticProductsService, private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.orderDate = new Date()
  }


  ngOnChanges(): void {
    this.PrdListOfCategory = this.productsService.getProductsByCatId(this.sentCategoryId);
  }



  ngOnInit(): void {
    this.PrdListOfCategory = this.productsService.getProductsByCatId(this.sentCategoryId);
    this.products = this.PrdListOfCategory = this.productsService.getAllProducts();
  }

  buy(productPrice: number, count: any): void {
    this.orderTotalPrice += Number(count) * productPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

 
  productsTrackByFn(index: number, prod:IProduct) : number{
    return prod.id;
  }
  openProductDetails(pid: number){
    this.router.navigate(['/products', pid]);
  }
  

}
