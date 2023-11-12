import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { HomeContent } from "./models/home-content";

@Injectable({
    providedIn: 'root'})
export class HomeService {
  constructor(private http: HttpClient) { }

  baseUrl: string = environment.apiBaseUrl;

  getHomeContent(api: string): Observable<HomeContent> {
    return this.http.get<HomeContent>(this.baseUrl+api).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}