import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudiosWithWinnersComponent } from './list-studios-with-winners.component';

describe('StudiosWithWinnersComponent', () => {
  let component: ListStudiosWithWinnersComponent;
  let fixture: ComponentFixture<ListStudiosWithWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStudiosWithWinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudiosWithWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
