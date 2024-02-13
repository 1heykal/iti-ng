import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private Http: HttpClient) { }

  getAllProducts() : Observable<IProduct[]>{
    return this.Http.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatID(cid: number) : Observable<IProduct[]>{
    return this.Http.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${cid}`);
  }

  getProductById(pid: number) : Observable<IProduct> {
    return this.Http.get<IProduct>(`${environment.APIURL}/${pid}`);
  }


  addProduct(product: IProduct){
    this.Http.post(environment.APIURL, product);
  }

  updateProduct(pid: number, product: IProduct){
    this.Http.put(`${environment.APIURL}/${pid}`, product);
  }

  deleteProduct(pid: number){ 
    this.Http.delete(`${environment.APIURL}/${pid}`);
  }
  
}
