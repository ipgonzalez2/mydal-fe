import { TestBed } from '@angular/core/testing';

import { CenterLayoutService } from './center-layout.service';

describe('CenterLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CenterLayoutService = TestBed.get(CenterLayoutService);
    expect(service).toBeTruthy();
  });
});
