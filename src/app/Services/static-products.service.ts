import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private products: IProduct[] = [];
     
  constructor() { 
    this.products = [ {
      id: 100,
      name: "Lenovo laptop",
      price: 20080,
      quantity: 2,
      imageURL: "https://picsum.photos/350",
      categoryID: 1
    },
    {
      id: 201,
      name: "Samsung phone",
      price: 3270,
      quantity: 5,
      imageURL: "https://picsum.photos/350",
      categoryID: 2
    },
    {
      id: 401,
      name: "Xiaomi phone",
      price: 7500,
      quantity: 0,
      imageURL: "https://picsum.photos/350",
      categoryID: 2
    },
    {
      id: 601,
      name: "Redmi phone",
      price: 7000,
      quantity: 3,
      imageURL: "https://picsum.photos/350",
      categoryID: 2
    },
    {
      id: 710,
      name: "Iphone phone",
      price: 30000,
      quantity: 3,
      imageURL: "https://picsum.photos/350",
      categoryID: 2
    }, {
      id: 510,
      name: "Tablet 13",
      price: 3500,
      quantity: 1,
      imageURL: "https://picsum.photos/350",
      categoryID: 3
    },
    {
      id: 510,
      name: "Tablet 13 pro",
      price: 10000,
      quantity: 0,
      imageURL: "https://picsum.photos/350",
      categoryID: 3
    },
  ];
  }

  getAllProducts() : IProduct[]{
    return this.products;
  }

  getProductsByCatId(cid: number) : IProduct[]{
    return cid == 0? this.products : this.products.filter(p => p.categoryID == cid);
  }

  getProductById(pid: number) : IProduct | undefined {
    return this.products.find(p => p.id == pid);
  }

  deleteProduct(pid: number){

  }

  addNewProduct(product: IProduct){
    this.products.push(product);
  }

  getProductsIds() : number[]{
    return this.products.map(p => p.id);
  }


}
