import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
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
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private productService: ProductsService) { }

  ngOnInit(): void {
    this.pid = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.currentIndex = this.productsIds.findIndex(p => p == this.pid);

    this.productService.getAllProducts().pipe(
      map((products: IProduct[]) => products.map(p => p.id))
    ).subscribe(productsIds => this.productsIds = productsIds);

    this.activatedRoute.paramMap.subscribe(pm => {
      this.pid = Number(pm.get("pid"));
       this.productService.getProductById(this.pid).subscribe(product => this.product = product);
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
