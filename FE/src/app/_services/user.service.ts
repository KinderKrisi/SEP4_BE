import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { User } from '../_models/user';

import { handleError } from '../_helper/handler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = '/api/user';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(reservations => console.log('fetched reservations', reservations)),
      catchError(handleError('getReservations', []))
    )
  }

  Registration(user: User): Observable<User>{
    
    return this.http.post<User>(this.userUrl, user).pipe(
      tap(registration => console.log('registred user', registration)),
      catchError(handleError('registration', user))
    )
  }
}
