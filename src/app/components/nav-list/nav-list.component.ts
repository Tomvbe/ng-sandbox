import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  template: `
    <ul class="nav mb-3" role="tablist">
      <ng-content></ng-content>
    </ul>
  `,
})
export class NavListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
