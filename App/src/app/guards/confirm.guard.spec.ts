import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmGuard } from './confirm.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('ConfirmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([ConfirmGuard], (guard: ConfirmGuard) => {
    expect(guard).toBeTruthy();
  }));
});
