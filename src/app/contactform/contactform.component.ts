import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  errors: boolean = false;
  errorslist: string[] = [];
  sending: boolean = false;
  sent: boolean = false;
  serviceError: string;
  imagename = "load.gif";
  constructor(private service: EnquiryService) { }

  ngOnInit() {
  }
  sendEnquiry() {
    this.errors = false;
    this.errorslist = [];
    if (!this.name) {
      this.errorslist.push("Name cannot be empty");
    }
    if (!this.email) {
      this.errorslist.push("Email cannot be empty");
    }
    if (!this.message) {
      this.errorslist.push("Message cannot be empty");
    }
    if (this.errorslist.length > 0) {
      this.errors = true;
      return;
    }
    this.sending = true;
    let obj = { name: this.name, email: this.email, message: this.message };
    this.service.sendEnquiry(obj).subscribe(
      () => {
        setTimeout(() => {
          this.sending = true;
          this.imagename = "done.png";
        }, 2000);

      },
      (error) => {
        this.sending = false;
        this.serviceError = error.error.message;
      }
    );

  }
}
