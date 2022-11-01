import { Injectable } from '@angular/core';
import { Prophecy } from './prophecy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProphecyService } from './prophecy.service';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

items: Prophecy[] = [];
private cartUrl = 'http://localhost:8080/cart';  // URL to web api

// getCart(username: String) : Observable<Prophecy[]> {
//   const url = `${this.cartUrl}/${username}`;
//   return this.http.get<Prophecy[]>(url).pipe(tap(_ => this.log(`fetched cart username=${username}`)), catchError(this.handleError<Prophecy[]>(`getCart username=${username}`)));
// }

// I think the above is right for getting a specific cart, but GOD i have  no idea 





  removeFromCart(_t4: Prophecy) {
  this.items.splice(this.items.indexOf(_t4), 1);
}



addtoCart(prophecy: Prophecy) {
  this.items.push(prophecy);
}

getItems() {
  return this.items;
}
clearCart() {
  this.items = [];
  return this.items;
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


private log(message: string) {
  this.messageService.add(`ProphecyService: ${message}`);
}

  constructor(private messageService: MessageService, private http: HttpClient) { }
}
