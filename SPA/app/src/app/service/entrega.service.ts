import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Entrega } from '../model/entrega/entrega';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private entregasUrl = 'http://localhost:5000/api/Entregas/';  // URL to web api
  private token = localStorage.getItem('token');

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token?.toString()!
    })
  };

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  /** POST: add Armazem to DB */
  criarEntrega(entrega: Entrega): Observable<Entrega> {
    return this.httpClient.post<Entrega>(this.entregasUrl, entrega, this.httpOptions).pipe(
      tap((newEntrega: Entrega) => this.log(`Entrega adicionada com id=${newEntrega.id}`)),
      catchError(this.handleError<Entrega>('CriarEntrega'))
    );
  }

  /** GET armazens from the server */
  getEntregas(): Observable<Entrega[]> {
    return this.httpClient.get<Entrega[]>(this.entregasUrl,this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched entregas')),
        catchError(this.handleError<Entrega[]>('getEntregas', []))
      );
  }

  listarEntregasArmAsc(): Observable<Entrega[]>{
    return this.httpClient.get<Entrega[]>(this.entregasUrl+"armazemAsc",this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched entregas')),
      catchError(this.handleError<Entrega[]>('getEntregas', []))
    )
  }

  listarEntregasArmDesc(): Observable<Entrega[]>{
    return this.httpClient.get<Entrega[]>(this.entregasUrl+"armazemDesc",this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched entregas')),
      catchError(this.handleError<Entrega[]>('getEntregas', []))
    )
  }

  listarEntregasDataAsc(): Observable<Entrega[]>{
    return this.httpClient.get<Entrega[]>(this.entregasUrl+"dataAsc",this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched entregas')),
      catchError(this.handleError<Entrega[]>('getEntregas', []))
    )
  }

  listarEntregasDataDesc(): Observable<Entrega[]>{
    return this.httpClient.get<Entrega[]>(this.entregasUrl+"dataDesc",this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched entregas')),
      catchError(this.handleError<Entrega[]>('getEntregas', []))
    )
  }

  /** GET entrega by id. Will 404 if id not found */
getEntrega(id: string|null): Observable<Entrega> {
  const url = `${this.entregasUrl}${id}`;
  return this.httpClient.get<Entrega>(url,this.httpOptions).pipe(
    tap(_ => this.log(`fetched entrega id=${id}`)),
    catchError(this.handleError<Entrega>(`getEntrega id=${id}`))
  );
}

  /** PUT: update the entrega on the server */
updateEntrega(entrega: Entrega): Observable<any> {
  return this.httpClient.put(this.entregasUrl+ entrega.id, entrega, this.httpOptions).pipe(
    tap(_ => this.log(`updated entrega id=${entrega.id}`)),
    catchError(this.handleError<any>('updateEntrega'))
  );
}

/** DELETE: delete the hero from the server */
deleteEntrega(id: string): Observable<Entrega> {
  const url = `${this.entregasUrl}${id}/hard`;

  return this.httpClient.delete<Entrega>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted entrega id=${id}`)),
    catchError(this.handleError<Entrega>('deleteEntrega'))
  );
}

filterEntregasByArmazem(filter: string) {
  return this.httpClient.get<Entrega[]>(this.entregasUrl + 'armazem/' + filter,this.httpOptions).pipe(
    tap(_ => this.log('fetched entregas')),
    catchError(this.handleError<Entrega[]>('getEntregas', []))
  );
}

filterEntregasBetweenDates(filter: string,filter2: string) {
  return this.httpClient.get<Entrega[]>(this.entregasUrl + 'data/data1='+filter+'&data2='+filter2,this.httpOptions).pipe(
    tap(_ => this.log('fetched entregas')),
    catchError(this.handleError<Entrega[]>('getEntregas', []))
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