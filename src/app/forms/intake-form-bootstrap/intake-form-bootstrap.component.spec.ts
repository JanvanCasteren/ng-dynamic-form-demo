import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeFormBootstrapComponent } from './intake-form-bootstrap.component';

describe('IntakeFormBootstrapComponent', () => {
  let component: IntakeFormBootstrapComponent;
  let fixture: ComponentFixture<IntakeFormBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeFormBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeFormBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
