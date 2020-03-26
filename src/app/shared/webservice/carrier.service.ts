import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable } from 'rxjs-compat';
import { Carrier } from '../class/carrier';
import { throwError } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class CarrierService {


  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCarrierById(idCarrier: number): Observable<Carrier> {
    return this.http.get<Carrier>(this.baseUrl + 'carrier/' + idCarrier)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  addCarrier(carrier: Carrier): Observable<Carrier> {
    console.log('Dans service ADD : ' + carrier);
    return this.http.post<Carrier>(this.baseUrl + 'carrier/', JSON.stringify(carrier), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  getAllCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(this.baseUrl + 'carriers')
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  // getCarrierSmall() {
  //   return this.http.get<any>(this.baseUrl + 'carriers')
  //     .toPromise()
  //     .then(resultat => <Carrier[]>resultat.data)
  //     .then(data => { return data; });
  // }

  updateCarrier(carrier: Carrier) {
    return this.http.put<Carrier>(this.baseUrl + 'carrier/' + carrier.idCarrier, JSON.stringify(carrier), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteCarrier(carrier: Carrier) {
    return this.http.delete<Carrier>(this.baseUrl + 'carrier/' + carrier.idCarrier, httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('CarrierService error', error);
    return throwError('Something bad happened; please try again later.');
  }

}
