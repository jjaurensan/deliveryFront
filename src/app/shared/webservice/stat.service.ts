import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs-compat/operators/catchError';
import { Observable, } from 'rxjs-compat';
import { throwError } from 'rxjs';
import { YearStat } from '../interface/year-stat';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class StatService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getStatYear(year: number): Observable<YearStat[]> {
    return this.http.get<YearStat[]>(this.baseUrl + 'stat/year/' + year)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }
  private handleError(error: HttpErrorResponse) {
    console.log('StatService error', error);
    return throwError('Something bad happened; please try again later.');
  }
}
