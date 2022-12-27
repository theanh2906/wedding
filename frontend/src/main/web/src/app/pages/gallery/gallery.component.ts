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
  showImage: boolean[] = [];
  listImgLink: string[] = [];
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
    this.imageService.getGalleryImages().subscribe(this.setValue.bind(this));
    this.imageService.getImages(1).subscribe({
      next: (res) => {
        this.listImgLink = res;
      },
    });
  }

  viewFullscreen(url: string) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0`;
    open(url, '_blank', params);
  }

  private setValue(res: Images[]) {
    console.log(res);
    this.images = res;
    res.forEach((each, idx) => {
      this.showImage[idx] = false;
    });
  }
}
