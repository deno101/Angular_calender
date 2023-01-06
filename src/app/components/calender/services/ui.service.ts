import {Injectable} from '@angular/core';
import {Month} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private monthAPIUrl = "http://localhost:5000/months"

  constructor(private httpClient: HttpClient) {
  }

  getMonths(): Observable<Month[]> {
    return this.httpClient.get<Month[]>(this.monthAPIUrl);
  }

}
