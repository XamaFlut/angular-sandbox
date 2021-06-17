import { TestBed } from '@angular/core/testing';

import { CurrentUserOrAdminGuard } from './current-user-or-admin.guard';

describe('CurrentUserOrAdminGuard', () => {
  let guard: CurrentUserOrAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CurrentUserOrAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
