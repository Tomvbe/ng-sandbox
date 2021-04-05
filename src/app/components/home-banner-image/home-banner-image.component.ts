import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-banner-image',
  template: `
    <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid"
         alt="Bootstrap Themes" width="700" height="500" loading="lazy">
  `,
  styleUrls: ['./home-banner-image.component.css']
})
export class HomeBannerImageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
