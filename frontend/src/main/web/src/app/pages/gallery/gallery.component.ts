import { Component, Inject, OnInit } from '@angular/core';
import { Images, ImagesService } from '../../services/images.service';
import { APP_CONFIG, IAppConfig } from '../../config/app.config';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  morningImages: Images[] = [];
  weddingParty: Images[] = [];
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
    forkJoin([
      this.imageService.getGalleryImages(1),
      this.imageService.getGalleryImages(2),
    ]).subscribe({
      next: (res) => {
        this.morningImages = res[0];
        this.weddingParty = res[1];
      },
    });
    // this.imageService.getImages(1).subscribe({
    //   next: (res) => {
    //     this.listImgLink = res;
    //   },
    // });
  }

  viewFullscreen(url: string) {
    console.log(url);
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0`;
    open(url, '_blank', params);
  }
}
