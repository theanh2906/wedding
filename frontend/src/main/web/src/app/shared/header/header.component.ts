import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  url?: string;
  target?: 'self' | 'new-tab';
  text: string;
  children?: MenuItem[];
  parent?: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showSubMenu() {}
}
