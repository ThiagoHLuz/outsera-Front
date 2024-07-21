import { Component, OnInit } from '@angular/core';
import {
  ListYearsMultipleWinnersComponent
} from "../../components/list-years-multiple-winners/list-years-multiple-winners.component";
import {
  ListStudiosWithWinnersComponent
} from "../../components/list-studios-with-winners/list-studios-with-winners.component";
import {MaxMinIntervalWinsComponent} from "../../components/max-min-interval-wins/max-min-interval-wins.component";
import {ListMovieWinnersComponent} from "../../components/list-movie-winners/list-movie-winners.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    ListYearsMultipleWinnersComponent,
    ListStudiosWithWinnersComponent,
    MaxMinIntervalWinsComponent,
    ListMovieWinnersComponent
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
