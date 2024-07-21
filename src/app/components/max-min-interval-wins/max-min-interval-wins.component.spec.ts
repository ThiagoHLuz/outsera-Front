import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinIntervalWinsComponent } from './max-min-interval-wins.component';

describe('MaxMinIntervalWinsComponent', () => {
  let component: MaxMinIntervalWinsComponent;
  let fixture: ComponentFixture<MaxMinIntervalWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxMinIntervalWinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxMinIntervalWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
