import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements AfterViewInit {
  currentDate: any;
  targetDate: any;
  cDateMilliSecs: any;
  tDateMilliSecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  currentDay: any;
  year: number = 2022;
  currentYear: any;
  month: number = 11;
  currentMonth: any;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 15;

  ngAfterViewInit() {
    // AOS.init({
    //   duration: 2000,
    //   easing: 'linear',
    //   once: true,
    // });
    this.myTimer();
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2022, 11, 15);
    this.cDateMilliSecs = this.currentDate.getTime();
    this.tDateMilliSecs = this.targetDate.getTime();
    this.difference = this.tDateMilliSecs - this.cDateMilliSecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
    this.currentDay = new Date().getDate();
    this.currentMonth = new Date().getMonth() + 1;
    this.currentYear = new Date().getFullYear();
    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    // @ts-ignore
    document.getElementById('days').innerText = this.currentDay;
    // @ts-ignore
    document.getElementById('hours').innerText = this.currentMonth;
    // @ts-ignore
    document.getElementById('mins').innerText = this.currentYear;
    // @ts-ignore
    document.getElementById('seconds').innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }
}
