import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CountDownComponent, HeaderComponent],
  exports: [CountDownComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
