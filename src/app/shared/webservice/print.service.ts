import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable } from 'rxjs-compat';
import { throwError } from 'rxjs';
import { Carrier } from '../interface/carrier';
import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  getPrintFile(carrier: Carrier, dateDelivery: Date): Observable<File[]> {
    return this.http.get<File[]>(this.baseUrl + 'pdf/' + carrier.idCarrier + '/' + this.transformDate(dateDelivery), httpOptions)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  getPDF(carrier: Carrier, dateDelivery: Date): Observable<Blob> {
    const url: any = this.baseUrl + 'pdf/' + carrier.idCarrier + '/' + this.transformDate(dateDelivery);
    const authorization = 'Bearer ' + sessionStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: authorization, responseType: 'blob'
    });
    return this.http.get<Blob>(url, {headers, responseType:
        'blob' as 'json'});
  }

  // getFilePdf(carrier: Carrier, dateDelivery: Date): Observable<Blob> {
  //   var mediaType = 'application/pdf';
  //   const nameFile: any = this.transformDate(dateDelivery) + '_' + carrier.name + '.pdf';
  //   const url: any = this.baseUrl + 'pdf/' + carrier.idCarrier + '/' + this.transformDate(dateDelivery);
  //   this.http.get(url, { location: nameFile }).subscribe(
  //     (response) => {
  //       var blob = new Blob([response], { type: mediaType });
  //       saveAs(blob, this.transformDate(dateDelivery) + '_' + carrier.name + '.pdf')
  //     },
  //     error => { throwError(error); }
  //   );
  // }

  private handleError(error: HttpErrorResponse) {
    console.log('PrintService error', error);
    return throwError('Something bad happened; please try again later.');
  }

}
