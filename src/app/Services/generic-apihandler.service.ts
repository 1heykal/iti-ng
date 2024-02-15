import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/Environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {

  httpOptions;

  constructor(private httpClient: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  private setHeaders(key: string, value: string){
    this.httpOptions.headers.set(key, value);
  }

  getAll(APIRoute: string) : Observable<APIResponseVM>{
    return this.httpClient.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getById(APIRoute: string, id: number) : Observable<APIResponseVM>{
    return this.httpClient.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`);
  }

  post(APIRoute: string, newObject: any) : Observable<APIResponseVM>{
    return this.httpClient.post<APIResponseVM>(`${environment.APIURL}/${APIRoute}`, newObject);
  }

  put(APIRoute: string, id:number, newObject: any){
    return this.httpClient.put<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`, newObject);
  }

  delete(APIRoute: string, id: number){
    return this.httpClient.delete<APIResponseVM>(`${environment.APIURL}/${APIRoute}/${id}`);
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
