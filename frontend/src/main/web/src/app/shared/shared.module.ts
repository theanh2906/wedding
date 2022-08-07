import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CountDownComponent, HeaderComponent],
  exports: [CountDownComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
