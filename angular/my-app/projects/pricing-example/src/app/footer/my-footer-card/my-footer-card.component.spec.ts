import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooterCardComponent } from './my-footer-card.component';

describe('MyFooterCardComponent', () => {
  let component: MyFooterCardComponent;
  let fixture: ComponentFixture<MyFooterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFooterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFooterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
