import { TestBed } from '@angular/core/testing';

import { NgxOneTapService } from './ngx-one-tap.service';

describe('NgxOneTapService', () => {
  let service: NgxOneTapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOneTapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
