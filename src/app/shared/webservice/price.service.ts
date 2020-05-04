import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable } from 'rxjs-compat';
import { throwError } from 'rxjs';

import { Price } from '../interface/price';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }


  getAllPrice(): Observable<Price[]> {
    return this.http.get<Price[]>(this.baseUrl + 'price')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  getPriceByID(idPrice: number): Observable<Price> {
    return this.http.get<Price>(this.baseUrl + 'price/' + idPrice)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  addPrice(price: Price): Observable<Price> {
    return this.http.post<Price>(this.baseUrl + 'price/', JSON.stringify(price), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  updatePricing(price: Price) {
    return this.http.put<Price>(this.baseUrl + 'price/' + price.idPrice, JSON.stringify(price), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  deletePricing(idPrice: number) {
    return this.http.delete<Price>(this.baseUrl + 'price/' + idPrice, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }



  private handleError(error: HttpErrorResponse) {
    console.log('PriceService error', error);
    return throwError('Something bad happened; please try again later.');
  }
}
