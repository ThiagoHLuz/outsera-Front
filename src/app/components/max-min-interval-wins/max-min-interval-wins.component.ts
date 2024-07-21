import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Interval} from "../../models/IntervalProducers";
import {MoviesService} from "../../services/movies.service";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'app-max-min-interval-wins',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor
  ],
  templateUrl: './max-min-interval-wins.component.html',
  styleUrl: './max-min-interval-wins.component.css'
})
export class MaxMinIntervalWinsComponent implements OnInit{

  dados$!: Observable<Interval>;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.obterMaxMinInterval();
  }

  obterMaxMinInterval() {
    this.dados$ = this.moviesService.getMaxMinIntervalProducers();
  }

}
