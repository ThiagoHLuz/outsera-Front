import {Component, OnInit} from '@angular/core';
import {ListMoviesComponent} from "../../components/list-movies/list-movies.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ListMoviesComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
