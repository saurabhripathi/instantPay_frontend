import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
// different http methods //
  constructor(private readonly httpClient: HttpClient) {
  }
   //function for get requests /
  get<R>(url: string, options = {}): Observable<R> {
    options = this.setHeader(options)
    return this.httpClient
      .get<R>(url, options)
      .pipe(
      )
  }

  // function for post requests /
  post<R>(url: string, body: any, options = {}): Observable<R> {
    options = this.setHeader(options)
    return this.httpClient
      .post<R>(url, body, options)
      .pipe(
      )
  }

  delete<R>(url: string, options = {}): Observable<R> {
    options = this.setHeader(options)
    return this.httpClient
      .delete<R>(url, options)
      .pipe(
      )
  }

  /** setting header while API calls */
  setHeader(options): object {
    const obj = {
      'Content-Type': 'application/json',
    }
    if (options.hasOwnProperty('headers')) {
      for (const x of Object.keys(options.headers)) {
        obj[x] = options.headers[x]
      }
    }
    options.headers = new HttpHeaders(obj)
    if (options.hasOwnProperty('params')) {
      options.params = this.setParam(options)
    }
    return options
  }
  /** setting params before api calls */
  setParam(options): object {
    const params = {}
    for (const x of Object.keys(options.params)) {
      params[x] = options.params[x]
    }
    return params
  }
}
