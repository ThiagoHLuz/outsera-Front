import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Studio} from "../../models/Studio";
import {MoviesService} from "../../services/movies.service";
import { map } from 'rxjs/operators';
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'app-list-studios-with-winners',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor
  ],
  templateUrl: './list-studios-with-winners.component.html',
  styleUrl: './list-studios-with-winners.component.css'
})
export class ListStudiosWithWinnersComponent implements OnInit {

  dados$!: Observable<Studio[]>;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.obterTop3Studios();
  }

  obterTop3Studios() {
    this.dados$ = this.moviesService.getTopStudiosWithWinners().pipe(
      map((res) => res.studios.slice(0, 3))
    );
  }

}
