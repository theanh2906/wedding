import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppService, LoginRequest } from './app.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  token = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onToggleSideNav($event: boolean) {
    if ($event) {
      $('.wrapper').toggle();
    }
  }
}
