import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { throwError } from 'rxjs';
import { Delivery } from '../interface/delivery';
import { DatePipe } from '@angular/common';
import { $ } from 'protractor';


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

  constructor(private http: HttpClient, public datePipe: DatePipe) { }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

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
    const service = this;
    function replacer(name: any, val: any) {
      if (name === 'createDateDelivery') {
        return service.transformDate(val);
      } else {
        return val;
      }
    }

    console.log(JSON.stringify(delivery, replacer));
    return this.http.post<Delivery>(this.baseUrl + 'delivery/', JSON.stringify(delivery, replacer), httpOptions)
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
