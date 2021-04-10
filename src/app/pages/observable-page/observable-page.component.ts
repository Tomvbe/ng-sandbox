import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-observable-page',
  template: `
    <ul class="nav mb-3" role="tablist">
      <li class="nav-item">
        <a class="nav-link" id="observable-page-tab" data-toggle="pill" routerLink="hot-and-cold" role="tab"
           aria-controls="observable-page" aria-selected="false">Hot and cold observables</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./observable-page.component.css']
})
export class ObservablePageComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
}
