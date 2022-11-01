import { Injectable } from '@angular/core';
import { Prophecy } from './prophecy';
import { PROPHECIES } from './test-prophecies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProphecyService {
  
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private propheciesUrl = 'http://localhost:8080/prophecies';  // URL to web api

  getProphecies(): Observable<Prophecy[]> {
    this.messageService.add('ProphecyService: fetched prophecies');
    return this.http.get<Prophecy[]>(this.propheciesUrl).pipe(tap(_ => this.log('fetched prophecies')), 
    catchError(this.handleError<Prophecy[]>('getProphecies', [])));
  }

  getProphecy(id: number): Observable<Prophecy> {
    const url = `${this.propheciesUrl}/${id}`;
    return this.http.get<Prophecy>(url).pipe(tap(_ => this.log(`fetched prophecy id=${id}`)), catchError(this.handleError<Prophecy>(`getProphecy id=${id}`)));
  }


updateProphecy(prophecy: Prophecy): Observable<any> {
  return this.http.put(this.propheciesUrl, prophecy, this.httpOptions).pipe(tap(_ => this.log(`updated prophecy id=${prophecy.id}`)), catchError(this.handleError<any>('updateProphecy')));

}

addProphecy(prophecy: Prophecy): Observable<Prophecy> {
  return this.http.post<Prophecy>(this.propheciesUrl, prophecy, this.httpOptions).pipe
  (tap((newProphecy: Prophecy) => this.log(`added prophecy w/ id=${newProphecy.id}`)), 
  catchError(this.handleError<Prophecy>('addProphecy')));
}

/** DELETE: delete the hero from the server */
deleteProphecy(id: number): Observable<Prophecy> {
  const url = `${this.propheciesUrl}/${id}`;
  return this.http.delete<Prophecy>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted prophecy id=${id}`)),
    catchError(this.handleError<Prophecy>('deleteProphecy'))
  );
}





searchProphecies(term: string): Observable<Prophecy[]> {
  if (!term.trim()) {
    // if not search term, return empty prophecy array.
    return of([]);
  }
  return this.http.get<Prophecy[]>(`${this.propheciesUrl}/?name=${term}`).pipe
  (tap(x => x.length ? this.log(`found prophecies matching "${term}"`) :
   this.log(`no prophecies matching "${term}"`)),
    catchError(this.handleError<Prophecy[]>('searchProphecies', [])));
}








private log(message: string) {
  this.messageService.add(`ProphecyService: ${message}`);
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
  
  constructor(private messageService: MessageService, private http: HttpClient) { }
}
