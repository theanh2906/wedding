import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

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
    this.brideFamily = [
      {
        label: 'Đàng gái',
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
    this.groomFamily = [
      {
        label: 'Đàng trai',
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
