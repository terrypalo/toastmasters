import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';


@Component({
    selector: 'add-or-delete-a-member',
    templateUrl: './add-or-delete-a-member.component.html',
    styleUrls: ['./add-or-delete-a-member.component.css']
})

export class AddordeleteComponent implements OnInit {

    loading = true;
    loggedOut = false;

    newMemberInfo = null;

    ngOnInit() {

    }

    add(){
            for (const field in this.newMemberInfo) {
                this.tmService.addMemberInfo(field, this.newMemberInfo[field]).subscribe();
            }

    }

    deactivate(){
        for (const field in this.newMemberInfo) {
            this.tmService.deactivateMemberInfo(field, this.newMemberInfo[field]).subscribe();
        }
    }

    detele(){

    }


}