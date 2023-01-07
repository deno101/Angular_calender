import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Month, Event, Reminder, Holiday} from "../interfaces";
import {DayComponent} from "../day/day.component";

@Component({
  selector: 'app-calender-grid',
  templateUrl: './calender-grid.component.html',
  styleUrls: ['./calender-grid.component.less']
})
/**
 * Component representing the calendar grid containing all the days
 */
export class CalenderGridComponent implements OnInit {
  @Input() month: Month = {} as Month; // required - the month the grid should display
  days: ComponentRef<DayComponent>[] = []; // a component array af the days created dynamically
  holidays: Holiday[] = [];
  events: Event[] = [];
  reminders: Reminder[] = [];

  constructor(private viewContainerRef: ViewContainerRef) {
    // init holidays. events, and reminder using the @input() month
    this.holidays = this.month.holidays as Holiday[];
    this.events = this.month.events as Event[];
    this.reminders = this.month.reminders as Reminder[];
  }

  ngOnInit() {
    // use a loop to create the dayComponent programmatically.
    // Then append the component to the days component array
    for (let i = 0; i < this.month.days; i++) {
      let compRef: ComponentRef<DayComponent> = this.viewContainerRef.createComponent(DayComponent); // create component
      // init the component
      compRef.instance.holidays = this.getHolidays(i + 1);
      compRef.instance.events = this.getEvents(i + 1);
      compRef.instance.reminders = this.getReminders(i + 1);
      compRef.instance.day = i + 1;

      this.days.push(compRef);// append the component to the array.
    }
  }

  private getEvents(day: number): Event[] {
    return this.events?.filter((event) => {
      return event.day === day;
    });
  }

  private getHolidays(day: number): Holiday[] {
    return this.holidays?.filter((holiday) => {
      return holiday.day == day;
    });
  }

  private getReminders(day: number): Reminder[] {
    return this.reminders?.filter((reminder: Reminder) => {
      return reminder.day == day;
    });
  }
}
