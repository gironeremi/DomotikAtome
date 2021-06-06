import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();
  appareils=[
    {
      name:'Master System',
      status:'éteint'
    },
    {
      name:'PS5',
      status:'allumé'
    },
    {
      name:'Super Nintendo',
      status:'éteint'
    }
  ];

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
