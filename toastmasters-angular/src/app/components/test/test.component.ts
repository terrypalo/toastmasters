import { Component, OnInit } from '@angular/core';
import { ToastmastersService } from '../../services/toastmasters.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  val = null
;
  constructor(private tmService: ToastmastersService) { }

  ngOnInit() {
     //   this.tmService.getNames().subscribe(
      // data => {this.val = data['names']; console.log(this.val)});

      // this.tmService.test("Alberto Ricordi").subscribe(
      //  data => {
      //    console.log(data)
      //  })

  }

  getNames() {

    // this.frontPageService.getDetails().subscribe(
   //    data => {this.details = data[0] ; this.isLoading = false;});


  }
}
