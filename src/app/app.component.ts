import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;

  firstCourse: any;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = af.database.object('lessons/-KYs4a9BokyJ5B3wNtvO');
    this.lesson$.subscribe(console.log);

    this.courses$.map(courses => courses[0])
      .subscribe(
      course => this.firstCourse = course
      );
  }

  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSE' })
      .then(
      () => console.log('List Push Done'),
      console.error
      );
  }

  listRemove() {
    this.courses$.remove(this.firstCourse)
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, { description: 'Angular 2 HTTP Modified' })
  }

  objUpdate() { }

  objSet() { }

}
