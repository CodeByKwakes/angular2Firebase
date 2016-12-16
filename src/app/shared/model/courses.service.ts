import { Course } from './course';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class CoursesService {

  constructor(private af: AngularFire) { }

findAllCourse(): Observable<Course[]> {
  return this.af.database.list('courses').map(Course.fromJsonArray);
}
}
