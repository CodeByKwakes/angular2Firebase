import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private af: AngularFire) {

    const courses$: FirebaseListObservable<any> = af.database.list('courses');

    courses$.subscribe(
      val => console.log(val)
    );

    const course$ = af.database.object('courses/-KYs4a92gr_fxGV0dtYL');

    course$.subscribe(console.log);
  }
}
