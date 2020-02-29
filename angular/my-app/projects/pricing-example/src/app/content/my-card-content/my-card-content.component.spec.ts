import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardContentComponent } from './my-card-content.component';

describe('MyCardContentComponent', () => {
  let component: MyCardContentComponent;
  let fixture: ComponentFixture<MyCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
