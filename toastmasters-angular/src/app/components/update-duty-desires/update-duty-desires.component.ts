import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-update-duty-desires',
  templateUrl: './update-duty-desires.component.html',
  styleUrls: ['./update-duty-desires.component.css']
})
export class UpdateDutyDesiresComponent implements OnInit {
  loading = true;
  loggedOut = false;
  oldDesires = null;
  currDesires = null;

  constructor(private tmService: ToastmastersService) { }

  ngOnInit() {
        this.tmService.getDesires().subscribe(data => {
        if (data['message'].includes('No tid specified.')) {
          if (localStorage.user) {
            localStorage.removeItem('user');
          }
          this.loggedOut = true;
          this.loading = false;

        } else {
          this.oldDesires = Object.assign({}, data['desires']);
          this.currDesires = Object.assign({}, data['desires']);
          this.loading = false;
        }
    });
  }
  update() {
     for (const field in this.oldDesires) {
       const oldField = this.oldDesires[field];
       const newField = this.currDesires[field];
       if (oldField !== newField) {
         this.tmService.updateDesires(field, oldField, newField).subscribe();
       }
     }

     alert("Desires Updated")
  }

}
