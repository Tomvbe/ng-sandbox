import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRightImageLeftComponent } from './text-right-image-left.component';

describe('TextRightImageLeftComponent', () => {
  let component: TextRightImageLeftComponent;
  let fixture: ComponentFixture<TextRightImageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRightImageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRightImageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
