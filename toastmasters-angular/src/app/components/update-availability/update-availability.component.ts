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
}
