import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  aOne="Machine à laver";
  aTwo="PS5";
  aThree="Enceinte connectée";

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }
  onAllumer() {
    console.log('On allume, gros!');
  }
}
