import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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
  tabletAndMobile!: MediaQueryList;
  tabletAndMobileListener!: () => void;
  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.tabletAndMobile = media.matchMedia('(max-width: 800px)');
    this.tabletAndMobileListener = () => this.changeDetectorRef.detectChanges();
    this.tabletAndMobile.addEventListener('change', () => {
      console.log(this.tabletAndMobile.matches);
    });
  }

  ngOnInit(): void {}

  showSubMenu() {}
}
