import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { PlanoEntregas } from '../model/planoEntregas/planoEntregas';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlanoEntregaService {

  private planoEntregasUrl = 'http://localhost:3000/api/planoEntregas/';  // URL to web api
  private token = localStorage.getItem('token');

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token?.toString()!
    })
  };

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  /** GET armazens from the server */
  getEntregas(pageNumber:number): Observable<any> {
    return this.httpClient.get<any>(this.planoEntregasUrl + '/Paginado/' + pageNumber,this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched entregas')),
        catchError(this.handleError<PlanoEntregas[]>('getEntregas', []))
      );
  }


  /** GET entrega by id. Will 404 if id not found */
getEntrega(id: string|null): Observable<PlanoEntregas> {
  const url = `${this.planoEntregasUrl}${id}`;
  return this.httpClient.get<PlanoEntregas>(url,this.httpOptions).pipe(
    tap(_ => this.log(`fetched entrega id=${id}`)),
    catchError(this.handleError<PlanoEntregas>(`getEntrega id=${id}`))
  );
}

  /**
* Handle Http operation that failed.
* Let the app continue.
*
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`EntregaService: ${message}`);
  }

}