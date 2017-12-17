import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ToastmastersService } from '../../services/toastmasters.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-update-availability',
  templateUrl: './update-availability.component.html',
  styleUrls: ['./update-availability.component.css']
})
export class UpdateAvailabilityComponent implements OnInit {
  asOfDate = null;
  months: any[] = [];
  monthName: string[] = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  user: any = null;
  selectedDates: any[] = [];
  loading = true;
  loggedOut = false;
  oldMemberInfo = null;
  currMemberInfo = null;

  constructor(private http: Http, private tmService: ToastmastersService) {
  }

  ngOnInit() {
    this.constructMonths();
    this.setAsOfDate();
    if (localStorage.getItem('user') != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.tmService.getMemberInfo().subscribe(
      data => {
        if (data['message'].includes('Member TID not specified')) {
          this.loggedOut = true;
          if (localStorage.getItem('user') != null) {
              localStorage.removeItem('user');
          }
        } else {
          this.oldMemberInfo = Object.assign({}, data['member']);
          this.currMemberInfo = Object.assign({}, data['member']);
          this.loading = false;
        }
      });
  }

  setAsOfDate() {
    const dt = new Date();
    const currMonth = dt.getMonth();
    let currDate = dt.getDate().toString();
    if (dt.getDate() < 10) {
      currDate = '0' + currDate;
    }
    let currHour = dt.getHours();
    let amPm = 'AM';
    if (currHour === 0) {
      currHour = 12;
    }else if (currHour === 12) {
      amPm = 'PM';
    }else if (currHour > 12) {
      currHour -= 12;
      amPm = 'PM';
    }
    const currMin = dt.getMinutes();
    const dtStr = 'As of ' + this.monthName[currMonth] + ' ' + currDate + ', ' +
     dt.getFullYear().toString() + ', ' + currHour.toString() + ':' + currMin.toString() + ' ' + amPm;
    this.asOfDate = dtStr;
  }

  constructMonths() {
      const dt = new Date();
      for (let a = 0; a < 10; a++) {
        const currentMonth = dt.getMonth();
        const currentYear = dt.getFullYear();
        const mName = this.monthName[currentMonth];
        const mt = {month: currentMonth, year: currentYear, monthName: mName, days: []};
        for (let b = 1; b <= 30; b++) {
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
          for (let c = mt.days.length; c < 5; c++) {
            mt.days.push({day: '', selected: false});
          }
        }
        this.months.push(mt);
        dt.setDate(1);
        dt.setMonth(currentMonth + 1);
      }
  }

  makeChangesClick() {
      let tid = '';
      tid = this.user.TID;
      for (let a = 0; a < this.months.length; a++) {
          const mt = this.months[a];
          for (let b = 0; b < mt.days.length; b++) {
              const dtStr = mt.year + '-' + (mt.month + 1) + '-' + mt.days[b].day;
              if (mt.days[b].selected) {
                  this.doUpdateAvailability(dtStr, '1', tid);
              }else {
                this.doUpdateAvailability(dtStr, '1', '');
              }
          }
      }
      alert('Availability Updated');
      this.startOverClick();
  }

  startOverClick() {
      for (let a = 0; a < this.months.length; a++) {
          const mt = this.months[a];
          for (let b = 0; b < mt.days.length; b++) {
              mt.days[b].selected = false;
          }
      }
  }

  availSuccess(res: Response) {
    // console.log('availSuccess');
  }

  availFailure(err: any) {
    // console.log('availFailure');
  }

  doUpdateAvailability(field, fieldOld, fieldNew) {
    const that = this;
    this.tmService.updateAvailability('update', field, fieldOld, fieldNew).subscribe(
      res => that.availSuccess(res), err => that.availFailure(err)
    );
  }
}
