import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Prophecy } from './prophecy';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private usersUrl = 'http://localhost:8080/users';  // URL to web api


  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return this.http.get<User[]>(this.usersUrl).pipe(tap(_ => this.log('fetched users')),
    catchError(this.handleError<User[]>('getUsers', [])));
  }

  getUser(username: String): Observable<User> {
    const url = `${this.usersUrl}/${username}`;
    return this.http.get<User>(url).pipe(tap(_ => this.log(`fetched user username=${username}`)), catchError(this.handleError<User>(`getUser username=${username}`)));
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(tap(_ => this.log(`updated user username=${user.username}`)), catchError(this.handleError<any>('updateUser')));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe
    (tap((newUser: User) => this.log(`added user w/ username=${newUser.username}`)),
    catchError(this.handleError<User>('addUser')));
  }

  deleteUser(user: User | string): Observable<User> {
    const username = typeof user === 'string' ? user : user.username;
    const url = `${this.usersUrl}/${username}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user username=${username}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
  
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?username=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found users matching "${term}"`) :
        this.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

















  private log(message: string) {
    this.messageService.add(`ProphecyService: ${message}`);
  }


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



  constructor(private messageService: MessageService, private http: HttpClient) { }
}
