import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { Customer } from '../class/customer';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCustomerByNumber(customerNumber: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + 'customer/' + customerNumber)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }


  private handleError(error: HttpErrorResponse) {
    console.log('CustomerService error', error);
    return throwError('Something bad happened; please try again later.');
  }

}
