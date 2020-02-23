import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCardLiteComponent } from './code-card-lite.component';

describe('CodeCardLiteComponent', () => {
  let component: CodeCardLiteComponent;
  let fixture: ComponentFixture<CodeCardLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCardLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCardLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
