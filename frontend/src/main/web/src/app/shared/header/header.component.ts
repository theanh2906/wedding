import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import $ from 'jquery';
import { Router } from '@angular/router';
import { Constants } from '../constants';

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
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu!: ElementRef;
  @Output() toggleSideNav = new EventEmitter<boolean>();
  tabletAndMobile!: MediaQueryList;
  desktop!: MediaQueryList;
  isOpen = false;
  Pages = Constants.Pages;
  tabletAndMobileListener!: () => void;
  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private render: Renderer2,
    private router: Router
  ) {
    this.tabletAndMobile = media.matchMedia('(max-width: 800px)');
    this.desktop = media.matchMedia('(min-width: 801px)');
    this.tabletAndMobileListener = () => this.changeDetectorRef.detectChanges();
    this.tabletAndMobile.addEventListener('change', () => {
      if (this.tabletAndMobile.matches) {
        this.doMobile();
      } else {
        this.doDesktop();
      }
    });
    this.render.listen('window', 'click', this.detectMouseClick);
  }
  doMobile() {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  toggleSubMenu() {
    this.isOpen = !this.isOpen;
    $('.header-sidenav').fadeToggle(200);
  }

  doDesktop() {}

  detectMouseClick(e: any) {
    const sideNav = $('.header-sidenav');
    const indicator = $('.indicator');
    if (e.target == sideNav.get()[0] || e.target == indicator.get()[0]) {
      return;
    }
    if (sideNav.is(':visible')) {
      sideNav.fadeToggle(200);
    }
  }

  onNavigate(route: string) {
    this.router.navigate([route]).then(this.toggleSubMenu);
  }
}
