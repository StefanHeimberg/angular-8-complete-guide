import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  templateUrl: './warningalert.component.html',
  styleUrls: ['./warningalert.component.css']
})
export class WarningalertComponent implements OnInit {

  alertmessage = "";

  constructor() { }

  ngOnInit() {
    this.alertmessage = "Dies ist eine Warnung";
  }

}