import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MoviesService} from "../../services/movies.service";
import {Year} from "../../models/Year";
import {CommonModule} from "@angular/common";
import { map } from 'rxjs/operators';
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-list-years-multiple-winners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-years-multiple-winners.component.html',
  styleUrl: './list-years-multiple-winners.component.css'
})
export class ListYearsMultipleWinnersComponent implements OnInit {
  dados$!: Observable<Year[]>;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.obterDados();
  }

  obterDados() {
    this.dados$ = this.moviesService.getYearsMultipleWinners().pipe(
      map((res) => res.years)
    );
  }
}
