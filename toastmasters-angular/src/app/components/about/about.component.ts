import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  people = null;

  constructor(private tmService: ToastmastersService) { }

  ngOnInit() {
    this.tmService.getNames().subscribe(
    data => { this.people = data['names']; console.log(this.people); });
  }
}
