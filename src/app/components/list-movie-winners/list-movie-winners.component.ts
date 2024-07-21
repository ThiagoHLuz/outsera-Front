import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Winner} from "../../models/Winner";
import {MoviesService} from "../../services/movies.service";
import {AsyncPipe, NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-movie-winners',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    NgFor
  ],
  templateUrl: './list-movie-winners.component.html',
  styleUrl: './list-movie-winners.component.css'
})
export class ListMovieWinnersComponent implements OnInit {

  ano!: number;
  dados$!: Observable<Winner[]>;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
  }

  obterFilmesVencedoresPorAno() {

    const currentYear = new Date().getFullYear();

    if ((this.ano < 1980) || (this.ano > currentYear)) {
      alert('Informe um ano entre 1980 e ' + currentYear);
      return;
    }

    this.dados$ = this.moviesService.getMovieWinnerByYear(this.ano);
  }

}
