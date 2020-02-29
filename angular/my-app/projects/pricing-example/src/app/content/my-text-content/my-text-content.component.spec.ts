import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextContentComponent } from './my-text-content.component';

describe('MyTextContentComponent', () => {
  let component: MyTextContentComponent;
  let fixture: ComponentFixture<MyTextContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTextContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTextContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
