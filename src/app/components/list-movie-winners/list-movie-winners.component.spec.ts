import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieWinnersComponent } from './list-movie-winners.component';

describe('ListMovieWinnersComponent', () => {
  let component: ListMovieWinnersComponent;
  let fixture: ComponentFixture<ListMovieWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovieWinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
