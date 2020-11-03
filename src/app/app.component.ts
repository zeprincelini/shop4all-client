import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop4all';
  spin = false;

  load(){
    this.spin = true;
    setTimeout(() => {
      this.spin = !this.spin;
    }, 5000)
  }
}
