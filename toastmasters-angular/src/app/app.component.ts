import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from './services/toastmasters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  logged_in = false;
  user = null;

  constructor(private tmService: ToastmastersService) {
    if (localStorage.user !== undefined) {
      this.user = JSON.parse(localStorage.user);
    }
  }

  ngOnInit() {

  }

  login(first, password) {
    this.tmService.login(first, password).subscribe(
      data => {

        if (data.message.includes('Welcome')) {
          localStorage.setItem('user', JSON.stringify(data));
          this.user = data;
          this.logged_in = true;
        }

        alert(data.message);
      });
  }

  logout() {
    this.tmService.logout().subscribe(
      data => {
        this.user = null;
        localStorage.removeItem('user');
        alert(data.message);
      });
  }
}
