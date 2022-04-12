import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-alert-modal',
  templateUrl: './confirm-alert-modal.component.html',
  styleUrls: ['./confirm-alert-modal.component.scss']
})
export class ConfirmAlertModalComponent {
@Input() title: any;
@Input() prompt: any;
  constructor(public activeModal: NgbActiveModal) { }

}
