import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.scss'],
})
export class CelebrationComponent implements OnInit {
  isDisplayed = false;
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      easing: 'linear',
      once: true,
    });
  }

  showMap() {
    this.isDisplayed = true;
  }
}
