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
  tabletAndMobileListener!: () => void;
  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private render: Renderer2
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
  }
  doMobile() {
    // const menu = $('#menu');
    // this.render.addClass(this.menu.nativeElement, 'mobile');
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  showSubMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    $('.header-sidenav').fadeToggle({
      duration: 500,
      complete() {
        $('.header-brand').toggle(500);
      },
    });
    this.toggleSideNav.emit(true);
  }

  doDesktop() {}
}
