import { Injectable } from '@angular/core';

@Injectable()
export class OfferService {
  message: string;
  offerday: boolean;
  constructor() {
    this.offerday = true;
    this.message = "Flat 50% discount on all courses";
  }

}
