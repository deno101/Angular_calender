import {Component, OnInit} from '@angular/core';
import {UiService} from "./services/ui.service";
import {Holiday, Month} from "./interfaces";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.less']
})
export class CalenderComponent implements OnInit {
  months = {} as Month[];

  constructor(private uiService: UiService) {

  }

  ngOnInit(): void {
    // get the month data from the REST-API using the ui service
    this.uiService.getMonths().subscribe((months) => {
      this.months = months;
    })
  }

}
