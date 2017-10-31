import { TestBed, inject } from '@angular/core/testing';

import { IntakeFormService } from './intake-form.service';

describe('IntakeFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntakeFormService]
    });
  });

  it('should be created', inject([IntakeFormService], (service: IntakeFormService) => {
    expect(service).toBeTruthy();
  }));
});
