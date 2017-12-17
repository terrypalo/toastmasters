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

    }

    ngOnInit() {

    }

    navdate() {
        var input = (<HTMLInputElement>document.getElementById("date")).value;
        console.log(input);
        window.location.href = "/modify-agenda?date=" + (<HTMLInputElement>document.getElementById("date")).value;
    }

}
