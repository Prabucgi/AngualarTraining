import { Injectable } from '@angular/core';
import { course } from '../course';


@Injectable()
export class CourseService {
  private courses: course[];
  constructor() {

    this.courses = [
      { name: "PHP", image: "Php.png", description: "Php the great", price: 30000 },
      { name: "Rails", image: "Rails.png", description: "rails you can travel", price: 40000 },
      { name: "Ruby", image: "Ruby.png", description: "Ruby you can sell", price: 10000 },
      { name: "Android", image: "Android.png", description: "build beatiful apps", price: 130000 },
      { name: "iOS", image: "Ios.png", description: "Apple's friend", price: 5000 },
      { name: "Node JS", image: "node.png", description: "connected always", price: 15000 },
      { name: "Microsoft.NET", image: "net.png", description: "copy expert", price: 3000 },
      { name: "Java", image: "java.png", description: "everywhere everytime", price: 80000 }
    ];
  }
  getCourses(): course[] {
    return this.courses;
  }
}
