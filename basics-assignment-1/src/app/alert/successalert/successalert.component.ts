import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  alertmessage = "";

  constructor() { }

  ngOnInit() {
    this.alertmessage = "Dies ist eine Warnung";
  }

}
