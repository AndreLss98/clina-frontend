import { TestBed } from '@angular/core/testing';

import { PeriodResolver } from './period.resolver';

describe('PeriodResolver', () => {
  let resolver: PeriodResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PeriodResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
