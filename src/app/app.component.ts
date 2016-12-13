import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = af.database.object('lessons/-KYs4a9BokyJ5B3wNtvO');
    this.lesson$.subscribe(console.log);
  }

  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
      () => console.log('List Push Done'),
      console.error
      );
  }

  listRemove() { }

  listUpdate() { }

  objUpdate() { }

  objSet() { }

}
