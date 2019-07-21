import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  displayContent = false;
  clicks = [];
  
  onDisplayContentClick(event: Event) {
    this.displayContent = true;
    this.clicks.push(event.timeStamp);
  }

  getColor(index: number) {
    return (index+1 >= 5) ? 'blue' : '';
  }

}
