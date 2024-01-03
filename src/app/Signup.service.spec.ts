/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignupService } from './Signup.service';

describe('Service: Signup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService]
    });
  });

  it('should ...', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
