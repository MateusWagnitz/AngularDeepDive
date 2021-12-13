import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log('CourseViewed: ' + 'card component - button clicked ...');

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  // avoid
  cardStyles() {
    return {'text-decoration': 'underline'};
  }

}
