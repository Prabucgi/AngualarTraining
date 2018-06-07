import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../course';

@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses: course[], pricetype: string): any {
    let tmp = [];
    if (pricetype == "0")
      return courses;
    if (pricetype == "1") {
      for (let x in courses) {
        if (courses[x].price > 50000)
          tmp.push(courses[x]);
      }
    }
    if (pricetype == "2") {
      for (let x in courses) {
        if (courses[x].price <= 50000 && courses[x].price >= 30000)
          tmp.push(courses[x]);
      }
    }
    if (pricetype == "3") {
      for (let x in courses) {
        if (courses[x].price < 30000)
          tmp.push(courses[x]);
      }
    }
    return tmp;
  }

}
