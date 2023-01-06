import {Component, OnInit} from '@angular/core';
import {UiService} from "./services/ui.service";
import {Month} from "./interfaces";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.less']
})
export class CalenderComponent implements OnInit {
  private months = {} as Month[];

  constructor(private uiService: UiService) {

  }

  ngOnInit(): void {
    this.uiService.getMonths().subscribe((months) => {
      this.months = months;
      console.log(this.months);
    })
  }

}
