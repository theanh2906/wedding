import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng.module';
import { FormsModule } from '@angular/forms';
import { CelebrationComponent } from './celebration/celebration.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AboutUsComponent,
    GalleryComponent,
    HomeComponent,
    CelebrationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [AboutUsComponent, GalleryComponent, HomeComponent],
  providers: [],
})
export class PagesModule {}
