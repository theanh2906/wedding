import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppService, LoginRequest } from './app.service';
import * as $ from 'jquery';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  token = '';
  backgroundImages = ['wedding_bg.jpg', 'bg_ben_na.jpg'];
  backgroundIdx = 0;
  selectedBackground = this.backgroundImages[0];
  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
    translate.use('vi');
  }

  ngOnInit() {
    // setInterval(() => {
    //   const size = this.backgroundImages.length;
    //   this.selectedBackground = this.backgroundImages[this.backgroundIdx];
    //   if (this.backgroundIdx == size - 1) {
    //     this.backgroundIdx = 0;
    //   } else {
    //     this.backgroundIdx++;
    //   }
    // }, 3000);
  }

  onToggleSideNav($event: boolean) {
    if ($event) {
      $('.wrapper').toggle();
    }
  }
}
