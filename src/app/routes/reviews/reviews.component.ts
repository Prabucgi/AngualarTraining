import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { review } from '../../review';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: review[];
  reviewForm: any;
  courses: string[] = ["Java", "HTML", "CSS3", "Angular", "React JS"];
  constructor(private formbuilder: FormBuilder, private rs: ReviewService) {
    this.reviewForm = this.formbuilder.group({
      name: ['', [Validators.required, isSymbols]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(
        "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

      course: ['Java']
    });
  }

  ngOnInit() {
    this.rs.getReviews().subscribe(
      (data: review[]) => {
        this.reviews = data;
      },
      (err) => {
        alert("Ooops! error:" + err.error.message);
      }
    );
  }
  saveReview() {
    //alert();
    this.reviewForm.controls.name.value = "abc";
    alert(this.reviewForm.controls.name.value);
    var temp: any = {
      name: this.reviewForm.value.name,
      email: this.reviewForm.value.email,
      course: this.reviewForm.value.course,
      message: this.reviewForm.value.message,
      reviewdate: new Date().toString()
    }
    alert("Ssaved");

  }
}
function isSymbols(input: FormControl) {
  let temp: RegExp = new RegExp('[\._$@0-9]');
  let temp1: boolean = false;
  if (!temp.test(input.value))
    temp1 = true;

  return temp1 ? null : { needFormat: true };
}