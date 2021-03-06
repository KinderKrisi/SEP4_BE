import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { MovieReservation } from '../../_models/movieReservation';
import { handleError } from '../../_helper/handler';
import { ToastService } from '../toast/toast.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieReservationService {

  constructor(
    private http: HttpClient,
    private toast: ToastService
  ) { }

  private reservationsUrl = '/api/moviereservation';

  getMovieReservations(): Observable<MovieReservation[]> {
    return this.http.get<MovieReservation[]>(this.reservationsUrl).pipe(
      tap(reservations => console.log('fetched movie reservations', reservations)),
      catchError(handleError('getMovieReservations', []))
    )
  }
  reserveMovie(movieReservation: MovieReservation): Observable<MovieReservation> {
    return this.http.post<MovieReservation>(this.reservationsUrl, movieReservation).pipe(
      tap(response => this.successReservation(movieReservation)),
      catchError(this.failReservation("Reservation failed", null))
    )
  }
  successReservation(movieReservation: MovieReservation) {
    this.toast.movieReservationSuccess();
    console.log('reservation', movieReservation );
  }
  failReservation(errorMessage: string, reservation: MovieReservation) {
    this.toast.movieReservationFail();
    return handleError(errorMessage, reservation);
  }
}
