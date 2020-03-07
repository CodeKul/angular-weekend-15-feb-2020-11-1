import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCompComponent } from './sample-comp.component';

describe('SampleCompComponent', () => {
  let component: SampleCompComponent;
  let fixture: ComponentFixture<SampleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
