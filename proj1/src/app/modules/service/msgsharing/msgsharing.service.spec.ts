import { TestBed } from '@angular/core/testing';

import { MsgsharingService } from './msgsharing.service';

describe('MsgsharingService', () => {
  let service: MsgsharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgsharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
