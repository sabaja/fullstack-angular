import {TestBed} from '@angular/core/testing';

import {RouteGaurdService} from './route-guard.service';

describe('RouteGaurdService', () => {
  let service: RouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
