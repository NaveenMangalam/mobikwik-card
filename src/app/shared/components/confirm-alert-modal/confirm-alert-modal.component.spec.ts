import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAlertModalComponent } from './confirm-alert-modal.component';

describe('ConfirmAlertModalComponent', () => {
  let component: ConfirmAlertModalComponent;
  let fixture: ComponentFixture<ConfirmAlertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAlertModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
