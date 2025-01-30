import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Armazem } from '../model/armazem/armazem';
import { ArmazemDTO } from '../dto/IArmazemDTO';
import { MessageService } from './message.service';
import { Config } from '../config';


@Injectable({
  providedIn: 'root'
})
export class ArmazemService {

  private armazensUrl = Config.gestaoArmazemURL + 'armazens/'; // URL to web api

  private token = localStorage.getItem('token');



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token?.toString()!
    })
  };

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  /** POST: add Armazem to DB */
  addArmazem(armazem: ArmazemDTO): Observable<Armazem> {
    return this.httpClient.post<Armazem>(this.armazensUrl, armazem, this.httpOptions).pipe(
      tap((newArmazem: Armazem) => this.log(`added armazem w/ id=${newArmazem.id}`)),
      catchError(this.handleError<Armazem>('addArmazem'))
    );
  }

  /** GET armazens from the server */
  getArmazens(): Observable<Armazem[]> {
    return this.httpClient.get<Armazem[]>(this.armazensUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched armazens')),
        catchError(this.handleError<Armazem[]>('getArmazens', []))
      );
  }

  /** GET armazem by id. Will 404 if id not found */
  getArmazemTodos(id: string | null): Observable<Armazem> {
    const url = `${this.armazensUrl}${id}`;
    return this.httpClient.get<Armazem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched armazem id=${id}`)),
      catchError(this.handleError<Armazem>(`getArmazem id=${id}`))
    );
  }

  /** GET armazem by id. Will 404 if id not found */
  getArmazem(id: string | null): Observable<Armazem> {
    const url = `${this.armazensUrl}id/${id}`;
    return this.httpClient.get<Armazem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched armazem id=${id}`)),
      catchError(this.handleError<Armazem>(`getArmazem id=${id}`))
    );
  }

  /** GET armazens by localidade */
  getArmazensByLocalidade(localidade: string): Observable<Armazem[]> {
    return this.httpClient.get<Armazem[]>(this.armazensUrl + 'localidade/' + localidade, this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched armazens')),
        catchError(this.handleError<Armazem[]>('getArmazensByLocalidade', []))
      );
  }

  /** GET armazem by designacao */
  getArmazemByDesignacao(designacao: string): Observable<Armazem> {
    return this.httpClient.get<Armazem>(this.armazensUrl + 'designacao/' + designacao, this.httpOptions).pipe(
      tap(_ => this.log(`fetched armazem designacao=${designacao}`)),
      catchError(this.handleError<Armazem>(`getArmazemByDesignacao designacao=${designacao}`))
    );
  }

  getArmazemByCoordenadas(latitude: number, longitude: number): Observable<Armazem> {
    return this.httpClient.get<Armazem>(this.armazensUrl + 'coordenadas/latitude=' + latitude.toString() +
      '&longitude=' + longitude.toString(), this.httpOptions).pipe(
        tap(_ => this.log(`fetched armazem latitude=${latitude}, longitude=${longitude}`)),
        catchError(this.handleError<Armazem>(`getArmazemByCoordenadas atitude=${latitude}, longitude=${longitude}`))
      );
  }

  /** PUT: update the armazem on the server */
  updateArmazem(armazem: ArmazemDTO): Observable<any> {
    return this.httpClient.put(this.armazensUrl + armazem.id, armazem, this.httpOptions).pipe(
      tap(_ => this.log(`updated armazem id=${armazem.id}`)),
      catchError(this.handleError<any>('updateArmazem'))
    );
  }

  /** DELETE: inibir armazem */
  inibirArmazem(id: string): Observable<Armazem> {
    const url = `${this.armazensUrl}${id}`;

    return this.httpClient.delete<Armazem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`inibido armazem id=${id}`)),
      catchError(this.handleError<Armazem>('inibirArmazem'))
    );
  }

  /** Put: desinibir armazem */
  desinibirArmazem(id: string): Observable<Armazem> {
    const url = `${this.armazensUrl}desinibir/${id}`;

    return this.httpClient.put<Armazem>(url, null, this.httpOptions).pipe(
      tap(_ => this.log(`desinibido armazem id=${id}`)),
      catchError(this.handleError<Armazem>('desinibirArmazem'))
    );
  }

  /** DELETE: delete the armazem from the server */
  deleteArmazem(id: string): Observable<Armazem> {
    const url = `${this.armazensUrl}${id}/hard`;

    return this.httpClient.delete<Armazem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted armazem id=${id}`)),
      catchError(this.handleError<Armazem>('deleteArmazem'))
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
    this.messageService.add(`ArmazemService: ${message}`);
  }

}