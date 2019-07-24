import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timeout: NodeJS.Timeout;

  @Output()
  numberIncremented = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  gameNumbers: number[] = [];

  onStartGame() {
    let incrementedNumber: number = 0;
    this.timeout = setInterval(() => {
      incrementedNumber = incrementedNumber + 1;
      this.numberIncremented.emit(incrementedNumber)
      console.log('event numberIncremented fired. incrementedNumber: ' + incrementedNumber);
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.timeout);
  }

}
