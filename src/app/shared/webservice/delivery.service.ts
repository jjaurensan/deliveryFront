import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { Delivery } from '../class/delivery';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCustomerByNumber(idDelivery: number): Observable<Delivery> {
    return this.http.get<Delivery>(this.baseUrl + 'delivery/' + idDelivery)
      .pipe(
        catchError((error) => this.handleError(error))
      );

  }
  private handleError(error: HttpErrorResponse) {
    console.log('DeliveryService error', error);
    return throwError('Something bad happened; please try again later.');
  }
}
