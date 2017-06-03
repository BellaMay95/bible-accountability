import { TestBed, inject } from '@angular/core/testing';

import { ReadinglistService } from './readinglist.service';

describe('ReadinglistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadinglistService]
    });
  });

  it('should be created', inject([ReadinglistService], (service: ReadinglistService) => {
    expect(service).toBeTruthy();
  }));
});
