import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONSTANTS } from 'src/app/consts/app.constant';
import { AddCardService } from 'src/app/services/add-card.service';
import AppUtils from 'src/app/utils/app.utils';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.scss']
})
export class AddNewCardComponent implements OnInit {
  monthList: string[] = APP_CONSTANTS.MONTHLIST;
  yearList: string[] = APP_CONSTANTS.YEARLIST;
  cardType: any = APP_CONSTANTS.CARDTYPE;
  form: FormGroup;
  imgUrl: string = 'https://img.icons8.com/color/40/000000/bank-card-back-side.png';
  @Output() onCreate: EventEmitter<void> = new EventEmitter<void>();
  constructor(public modal: NgbActiveModal, private _addCardService: AddCardService) { }

  ngOnInit(): void {
    this._buildForm();
  }

  private _buildForm() {
    this.form = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required]),
      expMonth: new FormControl(null, [Validators.required]),
      expYear: new FormControl(null, [Validators.required]),
      cvv: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.onCreate.emit(this.form.value);
    this.modal.close();
  }

  checkCardType(value: any) {
    this.imgUrl = AppUtils.checkCardType(value, this.cardType);
    return this.imgUrl;
  }
}
