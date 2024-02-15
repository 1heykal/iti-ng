import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions : object;

  constructor(private Http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   }

  getAllProducts() : Observable<IProduct[]>{
    return this.Http.get<IProduct[]>(`${environment.APIURL}/products`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getProductsByCatID(cid: number) : Observable<IProduct[]>{
    return this.Http.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${cid}`)
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
  }

  getProductById(pid: number) : Observable<IProduct> {
    return this.Http.get<IProduct>(`${environment.APIURL}/${pid}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  addProduct(product: IProduct): Observable<IProduct>{
    return this.Http.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(product), this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateProduct(pid: number, product: IProduct){
    this.Http.put(`${environment.APIURL}/${pid}`, product).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteProduct(pid: number){ 
    this.Http.delete(`${environment.APIURL}/${pid}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  handleError(error:HttpErrorResponse){
    if(error.status === 500){
      console.error('An error occurd:', error.error);
    }else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Error occured, please try again.'));
  }
  
}




// getAllProducts(): Observable<IProduct[]> {
//   return this.genericAPIHandler.getAll('products').pipe(
//     map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//   );
// }

// getProductsByCatID(cid: number): Observable<IProduct[]> {
//   return this.genericAPIHandler.getAll(`products?categoryID=${cid}`)
//     .pipe(
//       map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//     );
// }

// getProductById(pid: number): Observable<IProduct> {
//   return this.genericAPIHandler.getById('products', pid).pipe(
//     map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//   );
// }


// addProduct(product: IProduct): Observable<IProduct> {
//   return this.genericAPIHandler.post('products', JSON.stringify(product)).pipe(
//     map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//   );
// }

// updateProduct(pid: number, product: IProduct) {
//   this.genericAPIHandler.put('products', pid, JSON.stringify(product)).pipe(
//     map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//   );
// }

// deleteProduct(pid: number) {
//   this.genericAPIHandler.delete('products', pid).pipe(
//     map((apiResponseVM: APIResponseVM) => apiResponseVM.data)
//   );
// }

