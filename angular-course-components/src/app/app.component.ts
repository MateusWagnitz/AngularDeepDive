import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    this.cards.changes.subscribe(cards => console.log('Cards: ', cards));
  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    },
    )
  }

  onCourseSelected(course: Course) {
    console.log('Card clicked ...', course);
  }

}


// region: Example of how to use the @ViewChild/Children decorator and another simpler examples
  // title = COURSES[0].description;

  // price = 9.99;

  // rate = 0.67;

  // course = COURSES[0];

  // startDate = new Date(2000, 0, 1);


  // @ViewChild('cardRef')
  // card: CourseCardComponent;

  // @ViewChild('container')
  // containerDiv: ElementRef;
// #endregion
