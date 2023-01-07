import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {Month, Event, Reminder, Holiday} from "../interfaces";
import {DayComponent} from "../day/day.component";
import {GridFactoryComponent} from "./grid-factory/grid-factory.component";

@Component({
  selector: 'app-calender-grid',
  templateUrl: './calender-grid.component.html',
  styleUrls: ['./calender-grid.component.less']
})
/**
 * Component representing the calendar grid containing all the days
 */
export class CalenderGridComponent implements OnInit {
  @Input() monthData: Month = {} as Month;
  static month: Month = {} as Month;

  constructor() {
  }

  ngOnInit(): void {
    CalenderGridComponent.month = this.monthData;
  }
}


