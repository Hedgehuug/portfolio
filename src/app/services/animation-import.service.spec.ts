import { TestBed } from '@angular/core/testing';

import { AnimationImportService } from './animation-import.service';

describe('AnimationImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimationImportService = TestBed.get(AnimationImportService);
    expect(service).toBeTruthy();
  });
});
