import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  brideFamily: TreeNode[] = [];
  groomFamily: TreeNode[] = [];
  selectedNode: any;
  constructor() {}

  ngOnInit(): void {
    (document.getElementById('target') as HTMLElement).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest',
    });
    AOS.init({
      duration: 2000,
      easing: 'linear',
      once: true,
    });
    this.brideFamily = [
      {
        label: 'Bride',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: { name: '', avatar: 'walter.jpg' },
        children: [
          {
            label: 'Cha',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: { name: 'Mai Văn Phúc', avatar: 'saul.jpg' },
          },
          {
            label: 'Mẹ',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: { name: 'Trương Thị Thu', avatar: 'jesse.jpg' },
          },
        ],
      },
    ];
    this.groomFamily = [
      {
        label: 'Groom',
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: { name: '', avatar: 'walter.jpg' },
        children: [
          {
            label: 'Ông ngoại',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: { name: '', avatar: 'saul.jpg' },
          },
          {
            label: 'Bà ngoại',
            type: 'person',
            styleClass: 'p-person',
            expanded: true,
            data: { name: '', avatar: 'jesse.jpg' },
          },
        ],
      },
    ];
  }

  onNodeSelect($event: any) {}
}
