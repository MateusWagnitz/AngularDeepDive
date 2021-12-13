import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output} from '@angular/core';
import { Course } from 'src/app/model/course';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked,
AfterContentInit, AfterViewInit, DoCheck  {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private courseService: CoursesService) {

        console.log('constructor', this.course);
    }
    
    ngOnInit() {
            
        console.log('ngOnInit', this.course);
    
    }

    ngDoCheck() {
            
        console.log('ngDoCheck');
    
    }

    ngAfterContentInit() {
            
        console.log('ngAfterContentInit');
    
    }

    ngAfterViewInit() {
            
        console.log('ngAfterViewInit');
    
    }

    ngOnChanges(changes) {

        console.log('ngOnChanges', changes);

    }

    ngAfterContentChecked() {

        console.log('ngAfterContentChecked');

    }

    ngAfterViewChecked() {

        console.log('ngAfterViewChecked');

    }

    ngOnDestroy() {

        console.log('ngOnDestroy');

    }

    onTitleChanged(newTitle: string) {  
        
        this.course.description = newTitle;

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
