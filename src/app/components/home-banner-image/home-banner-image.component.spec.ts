import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerImageComponent } from './home-banner-image.component';

describe('HomeBannerImageComponent', () => {
  let component: HomeBannerImageComponent;
  let fixture: ComponentFixture<HomeBannerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
