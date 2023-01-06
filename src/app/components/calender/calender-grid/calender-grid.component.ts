import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Month, Event, Reminder, Holiday} from "../interfaces";
import {DayComponent} from "../day/day.component";

@Component({
  selector: 'app-calender-grid',
  templateUrl: './calender-grid.component.html',
  styleUrls: ['./calender-grid.component.less']
})
export class CalenderGridComponent implements OnInit {
  @Input() month: Month = {} as Month;
  days: ComponentRef<DayComponent>[] = [];
  holidays: Holiday[] = [];
  events: Event[] = [];
  reminders: Reminder[] = [];

  constructor(private viewContainerRef: ViewContainerRef) {
    this.holidays = this.month.holidays as Holiday[];
    this.events = this.month.events as Event[];
    this.reminders = this.month.reminders as Reminder[];
  }

  ngOnInit() {
    for (let i = 0; i < this.month.days; i++) {
      let compRef: ComponentRef<DayComponent> = this.viewContainerRef.createComponent(DayComponent);
      compRef.instance.holidays = this.getHolidays(i + 1);
      compRef.instance.events = this.getEvents(i + 1);
      compRef.instance.reminders = this.getReminders(i + 1);
      compRef.instance.day = i + 1;

      this.days.push(compRef)
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
