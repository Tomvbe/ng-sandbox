import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLeftImageRightComponent } from './text-left-image-right.component';

describe('TextLeftImageRightComponent', () => {
  let component: TextLeftImageRightComponent;
  let fixture: ComponentFixture<TextLeftImageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLeftImageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLeftImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
