import { TestBed } from '@angular/core/testing';

import { ScreenplayService } from './screenplay.service';

describe('ScreenplayService', () => {
  let service: ScreenplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
