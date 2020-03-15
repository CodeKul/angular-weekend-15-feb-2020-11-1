import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsCardComponent } from './ops-card.component';

describe('OpsCardComponent', () => {
  let component: OpsCardComponent;
  let fixture: ComponentFixture<OpsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
