import { Component, OnInit } from '@angular/core';
import { AppService, LoginRequest } from './app.service';
import { map, switchMap, take } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  token = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    let loginRequest: LoginRequest = {
      username: 'user',
      password: 'user',
    };
    let loginRequestStr = JSON.stringify(loginRequest);
    this.appService
      .encode(loginRequestStr)
      .pipe(
        switchMap((encoded) => {
          return this.appService.getToken(encoded.message);
        })
      )
      .subscribe(
        (res) => {
          this.title = res.data.token;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onToggleSideNav($event: boolean) {
    if ($event) {
      $('.wrapper').toggle();
    }
  }
}
