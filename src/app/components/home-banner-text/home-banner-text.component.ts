import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-banner-text',
  template: `
      <h1 class="display-5 fw-bold lh-1 mb-3">Responsive home banner text</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus accusantium beatae et facere iusto labore minima modi odio, quos vel?
        Atque autem dolores ipsum magni mollitia, perferendis quisquam tenetur voluptatibus.
      </p>
  `,
  styleUrls: ['./home-banner-text.component.css']
})
export class HomeBannerTextComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
