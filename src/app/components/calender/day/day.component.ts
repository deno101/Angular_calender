import {Component, OnInit} from '@angular/core';
import {Holiday, Event, Reminder} from "../interfaces";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit{
  holidays: Holiday[] = {} as Holiday[];
  events: Event[] = {} as Event[];
  reminders: Reminder[] = {} as Reminder[];

  day: number = -1;

  ngOnInit(): void {
  }

}
