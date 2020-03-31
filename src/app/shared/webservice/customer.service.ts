import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { Customer } from '../interface/customer';
import { throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

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
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + 'customer/', JSON.stringify(customer), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Customer>(this.baseUrl + 'customer/' + customer.customerNumber, JSON.stringify(customer), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteCustomer(customerNumber: number) {
    return this.http.delete<Customer>(this.baseUrl + 'customer/' + customerNumber, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('CustomerService error', error);
    return throwError('Something bad happened; please try again later.');
  }

}
