import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {HighlightedDirective} from './courses/directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit { 

  courses: Course[] = COURSES;
  
  constructor(private courseService: CoursesService) { }
  

  ngOnInit() {
    
  }
  
  onEditCourse() {
    
  }
  
  save(course: Course) {
    
    this.courseService.saveCourse(course)
    .subscribe(
      () => console.log('Course Saved!')
      );
      
    }
    
    
    
  }
  
  
  // #region comments
  
  // this.courseService.loadCourses().subscribe(courses => { // courses is an array of Course objects 

  //   this.courses = courses;
    
  // });

//DoCheck

  // courses = COURSES;

  // courses$: Observable<Course[]>;

  
  // loaded = false;

// constr
// private cd: ChangeDetectorRef


//onEditCourse() {

  // const course =  this.courses[0];

  // const newCourse = {...course};

  // newCourse.description = 'new value';

  // // this.courses[0].description = 'new value';

  // this.courses[0] = newCourse;

//}



      // this.loaded = true;

      // this.cd.markForCheck();



  // ngDoCheck() { // called every time the component is checked

  //   if(this.loaded){
  //     this.cd.markForCheck();   // markForCheck() is called when the component is initialized
  //     console.log('called cd.markForCheck()');
  //     this.loaded = undefined; // to avoid calling markForCheck() again
  //   }

  // }


  //onInit

      // this.courses$ = this.courseService.loadCourses();

    // this.courseService.loadCourses()
    // .subscribe(courses => this.courses = courses);

    // this.courses$ = this.courseService.loadCourses();



// #endregion
