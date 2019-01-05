import { TestBed } from '@angular/core/testing';

import { DblistService } from './dblist.service';

describe('DblistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DblistService = TestBed.get(DblistService);
    expect(service).toBeTruthy();
  });
});
