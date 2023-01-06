import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderGridComponent } from './calender-grid.component';

describe('CalenderGridComponent', () => {
  let component: CalenderGridComponent;
  let fixture: ComponentFixture<CalenderGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
