import { TestBed, inject } from '@angular/core/testing';

import { ToastmastersServiceService } from './toastmasters-service.service';

describe('ToastmastersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastmastersServiceService]
    });
  });

  it('should be created', inject([ToastmastersServiceService], (service: ToastmastersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
