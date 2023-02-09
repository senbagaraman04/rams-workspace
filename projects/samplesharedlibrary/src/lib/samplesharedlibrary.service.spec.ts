import { TestBed } from '@angular/core/testing';

import { SamplesharedlibraryService } from './samplesharedlibrary.service';

describe('SamplesharedlibraryService', () => {
  let service: SamplesharedlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplesharedlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
