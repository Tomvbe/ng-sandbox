import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithTextComponent } from './title-with-text.component';

describe('TitleWithTextComponent', () => {
  let component: TitleWithTextComponent;
  let fixture: ComponentFixture<TitleWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
