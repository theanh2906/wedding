import { Component, Inject, OnInit } from '@angular/core';
import { Images, ImagesService } from '../../services/images.service';
import { APP_CONFIG, IAppConfig } from '../../config/app.config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Images[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  display = false;

  constructor(
    private imageService: ImagesService,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 2000);
    this.imageService.getGalleryImages().subscribe(this.setValue.bind(this));
  }

  private setValue(res: Images[]) {
    console.log(res);
    this.images = res;
  }
}
