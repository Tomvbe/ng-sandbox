import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-observable-page',
  template: `
    <app-nav-list>
      <app-nav-item id="hot-and-cold-tab" path="hot-and-cold" navText="Hot and cold observables"></app-nav-item>
    </app-nav-list>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./observable-page.component.css']
})
export class ObservablePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
