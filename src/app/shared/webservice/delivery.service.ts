import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { throwError } from 'rxjs';
import { Delivery } from '../interface/delivery';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getDeliveryById(idDelivery: number): Observable<Delivery> {
    return this.http.get<Delivery>(this.baseUrl + 'delivery/' + idDelivery)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  getAllDelivery(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.baseUrl + 'deliveries')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  addDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.baseUrl + 'delivery/', JSON.stringify(delivery), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  updateDelivery(delivery: Delivery) {
    return this.http.put<Delivery>(this.baseUrl + 'delivery/' + delivery.idDelivery, JSON.stringify(delivery), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteDelivery(idDelivery: number) {
    return this.http.delete<Delivery>(this.baseUrl + 'delivery/' + idDelivery, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('DeliveryService error', error);
    return throwError('Something bad happened; please try again later.');
  }
}
