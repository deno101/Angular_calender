import {Component, ComponentRef, OnInit, ViewContainerRef} from '@angular/core';
import {Event, Holiday, Month, Reminder} from "../../interfaces";
import {CalenderGridComponent} from "../calender-grid.component";
import {DayComponent} from "../../day/day.component";

@Component({
  selector: 'app-grid-factory',
  templateUrl: './grid-factory.component.html',
  styleUrls: ['./grid-factory.component.less']
})
export class GridFactoryComponent implements OnInit {
  private month: Month = CalenderGridComponent.month;

  days: ComponentRef<DayComponent>[] = []; // a component array af the days created dynamically
  holidays: Holiday[] = [];
  events: Event[] = [];
  reminders: Reminder[] = [];
  daysBefore: number = 0;
  daysAfter: number = 0;

  constructor(private viewContainerRef: ViewContainerRef) {
    // init holidays. events, and reminder using the @input() month
    this.holidays = CalenderGridComponent.month.holidays as Holiday[];
    this.events = CalenderGridComponent.month.events as Event[];
    this.reminders = CalenderGridComponent.month.reminders as Reminder[];
  }

  ngOnInit() {
    this.getDimension();

    for (let i = 0; i < this.daysBefore; i++){
      this.viewContainerRef.createComponent(DayComponent); // create component
    }

    // use a loop to create the dayComponent programmatically.
    // Then append the component to the days component array
    for (let i = 0; i < CalenderGridComponent.month.days; i++) {
      let compRef: ComponentRef<DayComponent> = this.viewContainerRef.createComponent(DayComponent); // create component
      // init the component
      compRef.instance.isLiveComponent = true;
      compRef.instance.holidays = this.getHolidays(i + 1);
      compRef.instance.events = this.getEvents(i + 1);
      compRef.instance.reminders = this.getReminders(i + 1);
      compRef.instance.day = i + 1;

      this.days.push(compRef);// append the component to the array.
    }

    for (let i = 0; i < this.daysAfter; i++){
      this.viewContainerRef.createComponent(DayComponent); // create component
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

  /**
   * Helper method to determine the square the day should start
   * computes the gap before and after
   * @private
   */
  private getDimension() {
    const dayNameIndex: Map<string, number> = new Map<string, number>();
    dayNameIndex.set("monday", 1);
    dayNameIndex.set("tuesday", 2);
    dayNameIndex.set("wednesday", 3);
    dayNameIndex.set("thursday", 4);
    dayNameIndex.set("friday", 5);
    dayNameIndex.set("saturday", 6);
    dayNameIndex.set("sunday", 7);

    this.month = CalenderGridComponent.month;

    let temp;
    if (typeof (temp = dayNameIndex.get(this.month.start)) === "number") {
      this.daysBefore = temp - 1;
    } else {
      console.log(typeof this.month.start)
      return;
    }

    this.daysAfter = (this.daysBefore + this.month.days) % 7;
    if (this.daysAfter !== 0) {
      this.daysAfter = 7 - this.daysAfter;
    }

    console.log(this.daysBefore)
    console.log(this.daysAfter)
  }
}
