import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerTextComponent } from './home-banner-text.component';

describe('HomeBannerTextComponent', () => {
  let component: HomeBannerTextComponent;
  let fixture: ComponentFixture<HomeBannerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
