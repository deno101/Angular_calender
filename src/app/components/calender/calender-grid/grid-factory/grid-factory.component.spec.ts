import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFactoryComponent } from './grid-factory.component';

describe('GridFactoryComponent', () => {
  let component: GridFactoryComponent;
  let fixture: ComponentFixture<GridFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
