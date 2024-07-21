import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYearsMultipleWinnersComponent } from './list-years-multiple-winners.component';

describe('ListYearsMultipleWinnersComponent', () => {
  let component: ListYearsMultipleWinnersComponent;
  let fixture: ComponentFixture<ListYearsMultipleWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListYearsMultipleWinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListYearsMultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
