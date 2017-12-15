import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-select-agenda',
  templateUrl: './select-agenda.component.html',
  styleUrls: ['./select-agenda.component.css']
})
export class SelectAgendaComponent implements OnInit {
    dateval = 20171025;
    loading = true;
    loggedOut = false;
    people = null;
    oldAgendaInfo = null;
    currAgendaInfo = null;
    now = null;
    message = null;
    meetingDate = null;
    quote = null;
    author = null;
    constructor(private tmService: ToastmastersService, public http: Http) {
        /*
        //this.tmService.getMemberInfo().subscribe(
        this.http.get(
        //this.http.get('https://terrylp.ics415.com/toastmasters/api/update_member_api.php').map(res => res.json()).subscribe(data => {
        'http://ics415.com/toastmasters/members/apis/update_member_api.php'
        //'https://terrylp.ics415.com/toastmasters/api/update_member_api.php'
        //'http://quotes.rest/qod.json'
        //'https://terrylp.ics415.com/toastmasters/api/update_agenda2_api.php?'
        //'https://terrylp.ics415.com/toastmasters/api/update_agenda2_api.php?meetingDate=2017-10-25'
        //'http://ics415.com/toastmasters/members/apis/update_agenda2_api.php?meetingDate=2017-10-25'
        ).map(res => res.json()).subscribe(data => {
            this.now = data['now'];
            this.message = data['message'];

            //this.quote = data.contents.quotes[0].quote;
            //this.author = data.contents.quotes[0].author;
        });*/
    }

    ngOnInit() {
        /*
        this.tmService.getNames().subscribe(
            data => { this.people = data['names']; });
        */
    }
    testval() {
        var input = (<HTMLInputElement>document.getElementById("date")).value;
        console.log(input);
    }

    navdate() {
        var input = (<HTMLInputElement>document.getElementById("date")).value;
        console.log(input);
        window.location.href = "/modify-agenda?date=" + (<HTMLInputElement>document.getElementById("date")).value;
    }

}
