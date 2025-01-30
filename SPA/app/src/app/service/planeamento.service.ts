import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import Planeamento from '../model/planeamento/planeamento';
import PlaneamentoFrota from '../model/planeamento/planeamentoFrota';

@Injectable({
  providedIn: 'root'
})
export class PlaneamentoService {

  private URL = Config.logisticaURL + 'planoEntregas';

  private token = localStorage.getItem('token');

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token?.toString()!
    })
  };

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }


  calculaPlaneamento(data: string): Observable<Planeamento> {
    return this.httpClient.get<Planeamento>(this.URL + '/' + data,this.httpOptions);
  }

  calculaPlaneamentoHeuristicaMenorTempo(data: string): Observable<Planeamento> {
    return this.httpClient.get<Planeamento>(this.URL + '/menorTempo/' + data,this.httpOptions);
  }

  calculaPlaneamentoHeuristicaMaiorMassa(data: string): Observable<Planeamento> {
    return this.httpClient.get<Planeamento>(this.URL + '/maiorMassa/' + data,this.httpOptions);
  }

  calculaPlaneamentoHeuristicaCombinada(data: string): Observable<Planeamento> {
    return this.httpClient.get<Planeamento>(this.URL + '/combinada/' + data,this.httpOptions);
  }

  /**
   * Planeamento Frota Completa 
   */
  planemanetoFrotaCompleta(data: string): Observable<PlaneamentoFrota> {
    return this.httpClient.get<PlaneamentoFrota>(this.URL + '/planeamentoFrotaAlgoritmoSimulado/' + data,this.httpOptions);
  }
  
  //Melhor Solução
  melhorPlanemanetoDeFrota(data: string): Observable<PlaneamentoFrota> {
    return this.httpClient.get<PlaneamentoFrota>(this.URL + '/planeamentoFrotaCompleta/' + data,this.httpOptions);
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
