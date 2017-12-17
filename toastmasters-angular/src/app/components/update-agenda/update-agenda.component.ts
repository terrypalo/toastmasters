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
    oldAgendaInfo = [];
    currAgendaInfo = null;
    message = null;
    now = null;
    then = null;
    meetingDate = null;
    testval = localStorage.user;
    testval2 = null;
    constructor(private tmService: ToastmastersService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        let date;
        this.route.queryParams.subscribe((params: Params) => {
            let date = params['date'];
            //console.log(date);

            this.tmService.updateAgenda(date).subscribe(
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
        });
        
    }
    
  update() {
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
}
