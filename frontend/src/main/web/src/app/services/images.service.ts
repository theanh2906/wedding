import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../config/app.config';
import { map } from 'rxjs/operators';
import format from '@popperjs/core/lib/utils/format';

export interface Images {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  getImage(name: string) {
    return this.http.get<any>(`${this.config.endpoints.images.get}/${name}`);
  }

  getNames() {
    return this.http.get<string[]>(`${this.config.endpoints.images.getNames}`);
  }

  getGalleryImages() {
    return this.http
      .get<Images[]>(`${this.config.endpoints.images.getGalleryImages}`)
      .pipe(map(this.format.bind(this)));
  }

  format(source: Images[]) {
    return source.map((value) => {
      value.previewImageSrc = this.config.endpoints.api + value.previewImageSrc;
      value.thumbnailImageSrc =
        this.config.endpoints.api + value.thumbnailImageSrc;
      return value;
    });
  }

  getImages(folder: number) {
    return this.http.get<string[]>(
      `${this.config.endpoints.images.getImages}`,
      {
        params: {
          n: folder,
        },
      }
    );
  }
}
