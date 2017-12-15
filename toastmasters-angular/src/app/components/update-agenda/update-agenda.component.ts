import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-update-agenda',
  templateUrl: './update-agenda.component.html',
  styleUrls: ['./update-agenda.component.css']
})
    
export class UpdateAgendaComponent implements OnInit {
    loading = true;
    //loggedOut = false;

    //oldAgendaNum = [];
    oldAgendaInfo = [];
    currAgendaInfo = null;
    message = null;
    now = null;
    then = null;
    meetingDate = null;
    testval = localStorage.user;
    testval2 = null;
//    20171025
    constructor(private tmService: ToastmastersService, private route: ActivatedRoute) {
        //this.tmService.getMemberInfo().subscribe(
        /* moved to ngOnInit to get url parameter
        let date = this.route.queryParams["date"];
        console.log(this.route.queryParams["date"]);
        this.tmService.updateAgenda('20171025').subscribe(
            data => {
                this.testval = data['session_tid'];

                this.meetingDate = data['meetingDate'];
                var i = 0;
                while (i < 23) {
                    if (data.agenda[i].text == null) {
                        this.oldAgendaInfo[i] = "n";
                    } else {
                        this.oldAgendaInfo[i] = data.agenda[i].text;
                    }
                    i = i + 1;
                }
                    this.currAgendaInfo = Object.assign({}, data.agenda);
                    this.meetingDate = data['meetingDate'];
                    this.loading = false;
    });
    */
    }
    ngOnInit() {
        let date;
        this.route.queryParams.subscribe((params: Params) => {
            let date = params['date'];
            //console.log(date);

            this.tmService.updateAgenda(date).subscribe(
                data => {
                    this.testval = data['session_tid'];
                    //console.log(date);
                    this.meetingDate = data['meetingDate'];
                    /*
                    data.agenda.forEach((item, index) => {
                        this.oldAgendaInfo[index] = data.agenda[index].text;
                    });*/
                    var i = 0;
                    while (i < 23) {
                        if (data.agenda[i].text == null) {
                            this.oldAgendaInfo[i] = "n";
                        } else {
                            this.oldAgendaInfo[i] = data.agenda[i].text;
                        }
                        i = i + 1;
                    }
                    this.currAgendaInfo = Object.assign({}, data.agenda);
                    this.meetingDate = data['meetingDate'];
                    this.loading = false;
                });
        });
        
    }
    
  update() {
      this.tmService.loginother();
      this.oldAgendaInfo.forEach((item, index) => { 
          const oldField = this.oldAgendaInfo[index];
          const newField = this.currAgendaInfo[index].text;
          //console.log(this.oldAgendaInfo[index] + " and " + newField);
          if (oldField !== newField) {
              this.tmService.updateAgenda_2('insert', this.meetingDate, (index + 1), 0, newField).subscribe(
                  data => {
                      //console.log(index +" Insert and " + data['message']);
                  });;
                  this.tmService.updateAgenda_2('update', this.meetingDate, (index + 1), 0, newField).subscribe(
                      data => {
                          //console.log(index + " Update and " + data['message']);
                      });;
          }
          });
  }
    /*
  test() {
      this.currAgendaInfo[0].TEXT = 'Hello';
      //this.now = 'Yeppers';
      this.currAgendaInfo[0].ITEM = 'LocaTest';
      //this.currAgendaInfo[0].text = 'LocaTEXTTest';
      this.tmService.loginother().subscribe(
          data => {
              this.testval = data['message'];
              this.testval2 = data['TID'];
              this.currAgendaInfo[1].text = data['FirstName'];
              this.currAgendaInfo[2].text = data['Name'];
              this.currAgendaInfo[3].text = data['Title'];
          });
  }
    
  test2() {
      this.oldAgendaInfo.forEach((item, index) => {

          const oldField = this.oldAgendaInfo[index];
          const newField = this.currAgendaInfo[index].text;

          if (oldField !== newField && oldField == '/n' && newField !== null) {
              this.tmService.updateAgenda_2('insert', '2017-10-25', (index + 1), 0, newField).subscribe(
                  data => {
                      //this.currAgendaInfo[0].text = data['message'];
                  });
          } else if (oldField !== newField && oldField !== '/n' && newField !== null) {
              this.tmService.updateAgenda_2('update', '2017-10-25', (index + 1), 0, newField).subscribe(
                  data => {
                      //this.currAgendaInfo[0].text = data['message'];
                  });
          }

          console.log(index);
      });
  }
    */
}
