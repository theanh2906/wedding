import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CountDownComponent, HeaderComponent, FooterComponent],
  exports: [CountDownComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AngularMaterialModule,
    FormsModule,
  ],
})
export class SharedModule {}
