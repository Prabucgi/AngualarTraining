import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  lang: string = 'tamil';
  constructor(private service: TranslateService) {
    this.service.use(this.lang);
  }

  ngOnInit() {
  }
  changeLang() {
    //  this.lang = newLang;
    console.log(this.lang);
    this.service.use(this.lang);
  }

}
