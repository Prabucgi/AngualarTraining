import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { course } from '../../../course';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses: course[];
  pricetype: string = "0";
  constructor(private service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
