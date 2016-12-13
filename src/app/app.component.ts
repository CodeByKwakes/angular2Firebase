import { Component } from '@angular/core';

import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBrQrhWHHYEfj5vcUmKgyJlGFmf06WdpmE',
      authDomain: 'final-angular-firebase.firebaseapp.com',
      databaseURL: 'https://final-angular-firebase.firebaseio.com',
      storageBucket: 'final-angular-firebase.appspot.com',
      messagingSenderId: '500802307737'
    };
    initializeApp(config);

    var root = database().ref('messages');

    root.on('value', function (snap) {
      console.log(snap.key, snap.val());
    });

  }
}
