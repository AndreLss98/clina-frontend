import { TestBed } from '@angular/core/testing';

import { FindRoomByIdResolver } from './find-room-by-id.resolver';

describe('FindRoomByIdResolver', () => {
  let resolver: FindRoomByIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FindRoomByIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
