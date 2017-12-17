import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  title = 'app';
  user = null;
  FirstName = null;

  constructor(private tmService: ToastmastersService) {
    if (localStorage.user !== undefined) {
      this.user = JSON.parse(localStorage.user);
    }
  }

  ngOnInit() {
  }

  email(first) {
    this.tmService.emailPassword(first).subscribe(
      data => {

        if (data.message.includes('Welcome')) {
          localStorage.setItem('user', JSON.stringify(data));
          this.user = data;
        }

        alert(data.message);
      });
  }
}
