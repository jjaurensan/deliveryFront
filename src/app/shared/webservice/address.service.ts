import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { throwError } from 'rxjs';
import { Address } from '../interface/address';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCustomerById(idAddress: number): Observable<Address> {
    return this.http.get<Address>(this.baseUrl + 'address/' + idAddress)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl + 'address')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  addCustomer(address: Address): Observable<Address> {
    return this.http.post<Address>(this.baseUrl + 'address/', JSON.stringify(address), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteAddress(address: Address) {
    return this.http.delete<Address>(this.baseUrl + 'address/' + address.idAddress, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  updateAddress(address: Address) {
    return this.http.put<Address>(this.baseUrl + 'address/' + address.idAddress, JSON.stringify(address), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  addAddress(address: Address) {
    return this.http.post<Address>(this.baseUrl + 'carrier/', JSON.stringify(address), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('AddressService error', error);
    return throwError('Something bad happened; please try again later.');
  }
}
