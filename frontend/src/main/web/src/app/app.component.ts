import {Component, OnInit, Renderer2} from '@angular/core';
import * as $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';
import {ImagesService} from './services/images.service';
import * as vi from "src/assets/i18n/vi.json";
import * as en from "src/assets/i18n/en.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  token = '';
  backgroundImages: string[] = ['wedding_bg_1.jpg'];
  backgroundIdx = 0;
  selectedBackground = this.backgroundImages[0];
  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
    private imagesService: ImagesService
  ) {
    translate.setTranslation('en', en)
    translate.setTranslation('vi', vi)
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
    translate.use('vi');
  }

  ngOnInit() {
    // this.imagesService
    //   .getGalleryImages()
    //   .pipe(
    //     map((each) => {
    //       return each.map((value) => value.previewImageSrc);
    //     })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       this.backgroundImages = res;
    //       this.selectedBackground = res[0];
    //       setInterval(() => {
    //         const size = this.backgroundImages.length;
    //         this.selectedBackground = this.backgroundImages[this.backgroundIdx];
    //         if (this.backgroundIdx == size - 1) {
    //           this.backgroundIdx = 0;
    //         } else {
    //           this.backgroundIdx++;
    //         }
    //       }, 3000);
    //     },
    //   });
  }

  onToggleSideNav($event: boolean) {
    if ($event) {
      $('.wrapper').toggle();
    }
  }
}
