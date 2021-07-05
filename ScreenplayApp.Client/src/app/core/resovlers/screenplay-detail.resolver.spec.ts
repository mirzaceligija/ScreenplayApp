import { TestBed } from '@angular/core/testing';

import { ScreenplayDetailResolver } from './screenplay-detail.resolver';

describe('ScreenplayDetailResolver', () => {
  let resolver: ScreenplayDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ScreenplayDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
