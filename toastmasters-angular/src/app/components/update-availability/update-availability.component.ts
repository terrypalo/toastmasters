import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-update-availability',
  templateUrl: './update-availability.component.html',
  styleUrls: ['./update-availability.component.css']
})
export class UpdateAvailabilityComponent implements OnInit {
  private apiUrl = 'http://terrylp.ics415.com/toastmasters/api/';
  title = 'app works!';
  asOfDate = 'As of October 10, 2017, 2:42 PM';
  months: any[] = [];
  monthName: string[] = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private http: Http) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.constructMonths();
  }

  constructMonths() {
      let dt = new Date();
      for (var a = 0; a < 10; a++) {
        let currentMonth = dt.getMonth();
        let currentYear = dt.getFullYear();
        let mName = this.monthName[currentMonth];
        let mt = {month: currentMonth, year: currentYear, monthName: mName, days: []};
        for (var b = 1; b <= 30; b++) {
          dt.setDate(b);
          if (dt.getDay() === 3) {
              let d = dt.getDate().toString();
              if (dt.getDate() < 10) {
                d = '0' + d;
              }
              mt.days.push({day: d, selected: false});
          }
        }
        if (mt.days.length < 5) {
          for (var c = mt.days.length; c < 5; c++) {
            mt.days.push({day: '', selected: false});
          }
        }
        this.months.push(mt);
        dt.setDate(1);
        dt.setMonth(currentMonth + 1);
      }
  }

  makeChangesClick() {
      console.log('makeChangesClick');
      for (var a = 0; a < this.months.length; a++) {
          let mt = this.months[a];
          for (var b = 0; b < mt.days.length; b++) {
              if (mt.days[b].selected) {
                  console.log('Selected: ' + mt.days[b].day + '-' + mt.monthName + ' ' + mt.year);
              }
          }
      }
      this.doUpdateAvailability();
  }

  startOverClick() {
      console.log('startOverClick');
      for (let a = 0; a < this.months.length; a++) {
          const mt = this.months[a];
          for (let b = 0; b < mt.days.length; b++) {
              mt.days[b].selected = false;
          }
      }
  }

  availSuccess(res: Response) {
    console.log('availSuccess');
    console.log(res.text());
  }

  availFailure(err: any) {
    console.log('availFailure');
  }

  doUpdateAvailability() {
    console.log('doUpdateAvailability');
    const that = this;
    this.updateAvailability('a', 'b', 'c', 'd').subscribe(
      res => that.availSuccess(res), err => that.availFailure(err)
    );
  }

  updateAvailability(func, field, fieldOld, fieldNew) {
      const query = '?function=' + func +
              '&field=' + field +
              '&fieldOld=' + fieldOld +
              '&fieldNew=' + fieldNew;

      console.log('query: ' + query);

      return this.http.get(this.apiUrl + 'update_avail_api.php' + query, {withCredentials: true});
      // .map((res: Response) => res.json());
  }
}
