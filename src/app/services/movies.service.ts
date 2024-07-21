import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Years} from "../models/Year";
import {Studios} from "../models/Studio";
import {Interval} from "../models/IntervalProducers";
import {Winner} from "../models/Winner";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getYearsMultipleWinners(): Observable<Years> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'years-with-multiple-winners');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<Years>(url, httpOptions);
  }

  getTopStudiosWithWinners(): Observable<Studios> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'studios-with-win-count');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<Studios>(url, httpOptions);
  }

  getMaxMinIntervalProducers(): Observable<Interval> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('projection', 'max-min-win-interval-for-producers');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<Interval>(url, httpOptions);
  }

  getMovieWinnerByYear(year: number): Observable<Winner[]> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('winner', true);
    params = params.append('year', year);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<Winner[]>(url, httpOptions);
  }

  getMovies(
    page: number = 0,
    year?: number,
    winner?: boolean
  ): Observable<Movie> {
    const url = environment.apiURL;

    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', 15);
    if (winner) {
      params = params.append('winner', winner);
    }
    if (year) {
      params = params.append('year', year);
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params,
    };

    return this.http.get<Movie>(url, httpOptions);
  }
}
