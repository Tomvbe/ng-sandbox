import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  template: `
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" role="tab" [id]="id" [routerLink]="path">
        {{ navText }}
      </a>
    </li>
  `
})
export class NavItemComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  path: string | any[];

  @Input()
  navText: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
