import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import Caminho from '../model/caminho/caminho';
import ICaminhoDTO from '../dto/ICaminhoDTO';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CaminhoService {

  private token = localStorage.getItem('token');

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token?.toString()!
    })
  };
  filterCaminhosByIdArmazemDestino(filter: string, page: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/listarPorIdArmazenDestinoPaginado/' + filter + '/' + page,this.httpOptions);
  }
  filterCaminhosByIdArmazemOrigem(filter: string, page: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/listarPorIdArmazenOrigemPaginado/' + filter + '/' + page,this.httpOptions);
  }
  filterCaminhosById(filter: string): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/' + filter,this.httpOptions);
  }

  private URL = Config.logisticaURL + 'Caminhos';

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  criarCaminho(energiaNecessariaKWhInput: number, tempoDeslocacaoMinInput: number, idArmazemOrigemInput: string, idArmazemDestinoInput: string, distanciaEntreArmazensInput: number): Observable<any> {
    let caminhoDTO: ICaminhoDTO = { energiaNecessariaKWh: energiaNecessariaKWhInput, tempoDeslocacaoMin: tempoDeslocacaoMinInput, idArmazemOrigem: idArmazemOrigemInput, idArmazemDestino: idArmazemDestinoInput, distanciaEntreArmazens: distanciaEntreArmazensInput };
    return this.httpClient.post<Caminho>(this.URL, caminhoDTO,this.httpOptions)
      .pipe(
        catchError(this.handleError<Caminho>('criarCaminho'))
      );
  }

  listarCaminhos(pagina: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + '/listarTodosPaginado/' + pagina,this.httpOptions);
  }

  updateCaminho(id: string, energiaNecessariaKWhInput: number, tempoDeslocacaoMinInput: number, idArmazemOrigemInput: string, idArmazemDestinoInput: string, distanciaEntreArmazensInput: number) {

    let caminhoDTO: ICaminhoDTO = { energiaNecessariaKWh: energiaNecessariaKWhInput, tempoDeslocacaoMin: tempoDeslocacaoMinInput, idArmazemOrigem: idArmazemOrigemInput, idArmazemDestino: idArmazemDestinoInput, distanciaEntreArmazens: distanciaEntreArmazensInput };
    return this.httpClient.put(this.URL + '/' + id, caminhoDTO,this.httpOptions)
  }

  deleteCaminho(id: string): Observable<any> {
    return this.httpClient.delete<Caminho>(this.URL + '/' + id,this.httpOptions);
  }

  getCaminho(id: string): Observable<Caminho> {
    return this.httpClient.get<Caminho>(this.URL + '/' + id,this.httpOptions);
  }

  listarCaminho(id: number): Observable<Caminho> {
    return this.httpClient.get<Caminho>(this.URL + '/' + id,this.httpOptions);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CaminhoService: ${message}`);
  }
}
