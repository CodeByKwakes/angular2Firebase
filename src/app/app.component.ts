import { Component } from '@angular/core';

import { firebaseConfig } from './../environments/firebase.config';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {

    // Initialize firebaseConfig
    initializeApp(firebaseConfig);

    let root = database().ref();

    root.on('value', function (snap) {
      console.log(snap.val());
      // console.log(snap.key, snap.val());
    });

  }
}
