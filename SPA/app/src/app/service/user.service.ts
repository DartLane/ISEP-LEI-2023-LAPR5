import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../model/user/user';
import { MessageService } from './message.service';
import { Token } from '../model/token/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:5000/api/Users/';  // URL to web api
  private loginUrl = 'http://localhost:5000/api/Login/';
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
  criarUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`User adicionada com phonenumber=${newUser.phoneNumber}`)),
      catchError(this.handleError<User>('CriarUser'))
    );
  }

  /** GET armazens from the server */
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl,this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched entregas')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET users existentes from the server */
  getUsersExistentes(): Observable<User[]> {
    const url = `${this.usersUrl}existing/users`;
    return this.httpClient.get<User[]>(url,this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched users existentes')),
        catchError(this.handleError<User[]>('getUsersExistentes', []))
      );
  }
  

  /** GET entrega by id. Will 404 if id not found */
getUser(id: string|null): Observable<User> {
  const url = `${this.usersUrl}${id}`;
  return this.httpClient.get<User>(url,this.httpOptions).pipe(
    tap(_ => this.log(`fetched user id=${id}`)),
    catchError(this.handleError<User>(`getUser id=${id}`))
  );
}

getToken(email: string): Observable<Token> {
  const url = `${this.loginUrl}`;
  return this.httpClient.post<Token>(url,{email: email}).pipe(
    tap(_ => this.log(`fetched user id=${email}`)),
    catchError(this.handleError<Token>(`getToken id=${email}`))
  );
}

getUserByEmail(email: string): Observable<User> {
  const url = `${this.usersUrl}email/${email}`;
  return this.httpClient.get<User>(url).pipe(
    tap(_ => this.log(`fetched user email=${email}`)),
    catchError(this.handleError<User>(`getUser email=${email}`))
  );
}

  /** PUT: update the entrega on the server */
updateUser(user: User): Observable<any> {
  return this.httpClient.put(this.usersUrl+ user.id, user, this.httpOptions).pipe(
    tap(_ => this.log(`updated entrega id=${user.phoneNumber}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

/** DELETE: anonimizes user */
anonimizeUser(id: string): Observable<User> {
  const url = `${this.usersUrl}${id}/soft`;

  return this.httpClient.delete<User>(url, this.httpOptions).pipe(
    tap(_ => this.log(`anonimized user id=${id}`)),
    catchError(this.handleError<User>('anonimizeUser'))
  );
}

/** DELETE: delete the hero from the server */
deleteUser(id: string): Observable<User> {
  const url = `${this.usersUrl}${id}/hard`;

  return this.httpClient.delete<User>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted entrega id=${id}`)),
    catchError(this.handleError<User>('deleteUser'))
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
    this.messageService.add(`UserService: ${message}`);
  }

}