import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberIncremented(incrementedNumber: number) {
    console.log('number incremented: ' + incrementedNumber);
    if(incrementedNumber == 1) {
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
    if(Math.abs(incrementedNumber % 2) == 1) {
      this.oddNumbers.push(incrementedNumber);
    } else {
      this.evenNumbers.push(incrementedNumber);
    }
  }

}
