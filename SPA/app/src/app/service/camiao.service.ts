import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Config } from '../config';
import { Camiao } from '../model/camiao/camiao';
import { MessageService } from './message.service';
import { ICamiaoDTO } from '../dto/ICamiaoDTO';


@Injectable({
  providedIn: 'root'
})
export class CamiaoService {

  public URL = Config.logisticaURL +'camiao/';
  public matriculaURL = Config.logisticaURL + 'camiao/matricula/';

  private token = localStorage.getItem('token');

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token?.toString()!
    })
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  /** POST: adicionar um camiao a base de dados */
  criarCamiao(matriculaInput: string,taraInput: number, capacidadeCargaInput: number, cargaTotalBateriasInput: number,autonomiaInput: number, tempoRecarregamentoInput: number): Observable<any> {
    let camiaoDTO: ICamiaoDTO = {matricula: matriculaInput, tara: taraInput, capacidadeCarga: capacidadeCargaInput, cargaTotalBaterias: cargaTotalBateriasInput, autonomia: autonomiaInput, tempoRecarregamento: tempoRecarregamentoInput};
 
    return this.httpClient.post<Camiao>(this.URL, camiaoDTO,this.httpOptions)
    .pipe(
      catchError(this.handleError('addCamiao'))
    );
  }

  listarCamiao(matricula: number):Observable<Camiao>{
    return this.httpClient.get<Camiao>(this.matriculaURL,this.httpOptions);
  }

  /**GET: listar todos os camioes existentes */
  listarCamioes(): Observable<Camiao[]>{
    return this.httpClient.get<Camiao[]>(this.URL,this.httpOptions);
  }

  /**GET: listar todos os camioes inibidos */
  listarCamioesInibidos(): Observable<Camiao[]>{
    const camioesInibidosURL =  this.URL + 'inibidos/all' ;
    return this.httpClient.get<Camiao[]>(camioesInibidosURL,this.httpOptions);
  }

  /** PUT: editar um camiao */
  editarCamiao(camiao: Camiao): Observable<any>{
    const editarCamiaoURL =  this.URL + camiao.id ;
    return this.httpClient.put<Camiao>(editarCamiaoURL,camiao,this.httpOptions).pipe(
      tap(_ => this.log(`camiao ${camiao.id} editado!`)),
      catchError(this.handleError<any>('editarCamiao'))
      );
  }

  /** DELETE: eliminar camião */
  deleteCamiao(matricula: string): Observable<Camiao> {
    const deleteByMatriculaURL = this.matriculaURL + matricula;
    return this.httpClient.delete<Camiao>(deleteByMatriculaURL, this.httpOptions).pipe(
    );
  }

  /** Soft DELETE: inibir camião */
  inibirCamiao(matricula: string): Observable<Camiao> {
    const inibirByMatriculaURL = this.URL + 'inibir/' + matricula;
    return this.httpClient.delete<Camiao>(inibirByMatriculaURL, this.httpOptions).pipe(
    );
  }

  /** Post: Desinibir camião */
  desinibirCamiao(camiao: Camiao): Observable<Camiao> {
    const desinibirByMatriculaURL = this.URL + 'desinibir/' + camiao.matricula;
    let camiaoDTO: ICamiaoDTO = {matricula: camiao.matricula, tara: camiao.tara, capacidadeCarga: camiao.capacidadeCarga, cargaTotalBaterias: camiao.cargaTotalBaterias, autonomia: camiao.autonomia, tempoRecarregamento: camiao.tempoRecarregamento};
 
    return this.httpClient.post<Camiao>(desinibirByMatriculaURL, camiaoDTO,this.httpOptions).pipe();
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
    this.messageService.add(` CamiaoService: ${message}`);
  }

}
