import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import { Movie } from './../../models/Movie';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {CommonModule} from "@angular/common";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    FormsModule,
    NgxPaginationModule,
    CommonModule
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit {
  year: number | undefined = undefined;
  winner: boolean | undefined = undefined;
  page = 1;
  maxPage = 1;
  totalItens: number = 0;
  itensPerPage = 15;
  collection: any;

  dados$!: Observable<Movie>;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.obterFilmes();
  }

  obterFilmes() {

    this.moviesService
      .getMovies(this.page -1, this.year, this.winner)
      .subscribe(res => {
        this.totalItens = res.totalElements;
        this.collection = res;
      });
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.obterFilmes();
    }
  }

  next() {
    if (this.page < this.maxPage - 1) {
      this.page++;
    }
  }

  pageChanged(e: any) {
    this.obterFilmes();
  }

  counter(): Array<number> {
    let paginas = new Array();
    for (let index = 1; index <= 5; index++) {
      if (this.page + index < this.maxPage) {
        paginas.push(this.page + index);
      }
    }
    return paginas;
  }
}
