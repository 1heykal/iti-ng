import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  pid: number = 0;
  product: IProduct | undefined;
  productsIds: number[] = [];
  currentIndex: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private productService: StaticProductsService) { }

  ngOnInit(): void {
    this.pid = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.productsIds = this.productService.getProductsIds();
    this.currentIndex = this.productsIds.findIndex(p => p == this.pid);

    this.activatedRoute.paramMap.subscribe(pm => {
      this.pid = Number(pm.get("pid"));
      this.product = this.productService.getProductById(this.pid);
    });
  }


  goBack() {
    this.location.back();
  }

  next() {
    if(this.currentIndex != this.productsIds.length - 1)
      this.router.navigate(['/products', this.productsIds[++this.currentIndex]]);
    
  }


  previous() {
    if(this.currentIndex > 0)
      this.router.navigate(['/products', this.productsIds[--this.currentIndex]]);
    
  }


}
