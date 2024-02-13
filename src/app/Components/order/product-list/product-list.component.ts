import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  products: IProduct[] = [];
  orderTotalPrice = 0;
  orderDate: Date;
  PrdListOfCategory: IProduct[] = [];

  @Input() sentCategoryId: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;


  constructor(private productsService: ProductsService, private router: Router) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.orderDate = new Date()
  }


  ngOnChanges(): void {
    this.productsService.getProductsByCatID(this.sentCategoryId).subscribe(products =>
      this.PrdListOfCategory = products
    );
  }



  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(products => 
      this.PrdListOfCategory = products
    );
  }

  buy(productPrice: number, count: any): void {
    this.orderTotalPrice += Number(count) * productPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }


  productsTrackByFn(index: number, prod: IProduct): number {
    return prod.id;
  }
  openProductDetails(pid: number) {
    this.router.navigate(['/products', pid]);
  }


}
