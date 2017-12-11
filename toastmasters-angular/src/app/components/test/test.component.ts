import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  people = null;
  logged_in = false;
  user = null;

  constructor(private tmService: ToastmastersService) {
    if (localStorage.user !== undefined) {
      this.user = localStorage.user;
    }
  }

  ngOnInit() {
    this.tmService.getNames().subscribe(
    data => { this.people = data['names']; });
  }

  login(first, password) {
    this.tmService.login(first, password).subscribe(
      data => {

        if (data.message.includes('Welcome')) {
          localStorage.setItem('user', data);
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
