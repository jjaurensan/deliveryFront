import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable } from 'rxjs-compat';
import { throwError } from 'rxjs';

import { Pricing } from '../interface/pricing';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllPricing(): Observable<Pricing[]> {
    return this.http.get<Pricing[]>(this.baseUrl + 'pricing')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  getPricingByID(idPricing: number): Observable<Pricing> {
    return this.http.get<Pricing>(this.baseUrl + 'pricing/' + idPricing)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  addPricing(pricing: Pricing): Observable<Pricing> {
    return this.http.post<Pricing>(this.baseUrl + 'pricing/', JSON.stringify(pricing), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  updatePricing(pricing: Pricing) {
    return this.http.put<Pricing>(this.baseUrl + 'pricing/' + pricing.idPricing, JSON.stringify(pricing), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  deletePricing(idPricing: number) {
    return this.http.delete<Pricing>(this.baseUrl + 'pricing/' + idPricing, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }


  private handleError(error: HttpErrorResponse) {
    console.log('PricingService error', error);
    return throwError('Something bad happened; please try again later.');
  }

}
