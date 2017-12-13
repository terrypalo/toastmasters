import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-update-member-info',
  templateUrl: './update-member-info.component.html',
  styleUrls: ['./update-member-info.component.css']
})
export class UpdateMemberInfoComponent implements OnInit {
  loading = true;
  loggedOut = false;

  oldMemberInfo = null;
  currMemberInfo = null;


  constructor(private tmService: ToastmastersService) {
    this.tmService.getMemberInfo().subscribe(
      data => {
        if (data['message'].includes('Member TID not specified')) {
          this.loggedOut = true;
          if (localStorage.user) {
            localStorage.removeItem('user');
          }
          this.loading = false;
        } else {
          this.oldMemberInfo = Object.assign({}, data['member']);
          this.currMemberInfo = Object.assign({}, data['member']);
          this.loading = false;
        }
      });
  }

  ngOnInit() {

  }

  update() {
     for (const field in this.oldMemberInfo) {
       const oldField = this.oldMemberInfo[field];
       const newField = this.currMemberInfo[field];

       if (oldField !== newField) {
         this.tmService.updateMemberInfo(field, oldField, newField).subscribe();
       }
     }
  }

}
