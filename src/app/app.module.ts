import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';

import { CourseService } from './services/course.service';
import { EnquiryService } from './services/enquiry.service';
import { ReviewService } from './services/review.service';
import { OfferService } from './services/offer.service';
import { createOutput } from '@angular/compiler/src/core';
import { OverviewComponent } from './routes/home/overview/overview.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { CoursefilterPipe } from './pipes/coursefilter.pipe';
import { SchedulesComponent } from './routes/schedules/schedules.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferDirective } from './directives/offer.directive';

export function createTranslateLoder(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

const routes = [
  { path: "", component: HomeComponent },
  { path: "offices", component: OfficesComponent },
  { path: "virtualclass", component: VirtualclassComponent },
  { path: "offers", component: OffersComponent },
  { path: "newcourses", component: NewcoursesComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "cdetails/:ccode", component: OverviewComponent },
  { path: "schedules", component: SchedulesComponent, outlet: 'sidebar' }
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    SlideshowComponent,
    ContactformComponent,
    HomeComponent,
    OfficesComponent,
    ReviewsComponent,
    NewcoursesComponent,
    OffersComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,
    OverviewComponent,
    ReviewComponent,
    DiscountPipe,
    CoursefilterPipe,
    SchedulesComponent,
    HighlightDirective,
    OfferDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoder),
        deps: [HttpClient]
      }
    })
  ],
  providers: [CourseService, ReviewService, EnquiryService, OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
