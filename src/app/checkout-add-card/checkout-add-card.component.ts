import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONSTANTS } from '../consts/app.constant';
import { AddCardService } from '../services/add-card.service';
import { ConfirmAlertModalComponent } from '../shared/components/confirm-alert-modal/confirm-alert-modal.component';
import AppUtils from '../utils/app.utils';
import { AddNewCardComponent } from './popup/add-new-card/add-new-card.component';

@Component({
  selector: 'app-checkout-add-card',
  templateUrl: './checkout-add-card.component.html',
  styleUrls: ['./checkout-add-card.component.scss']
})
export class CheckoutAddCardComponent implements OnInit {

  modalRef: NgbModalRef;
  cardDetails: any = {};
  cardListData: any[] = [];
  cardType: any = APP_CONSTANTS.CARDTYPE;
  imgUrl: string = '';
  constructor(public modalService: NgbModal, private _addCardService: AddCardService) {

  }

  ngOnInit(): void {
    this.getAllCard();
  }

  openAddNewCardModal() {
    this.modalRef = this.modalService.open(AddNewCardComponent);
    if (this.modalRef && this.modalRef.componentInstance) {
      this.modalRef.componentInstance.onCreate.subscribe((res: any) => {
        console.log(res);
        this.cardDetails = res;
        this.createCard(this.cardDetails);
      })
    }
  }

  getAllCard() {
    this._addCardService.getCardData().subscribe((res) => {
      console.log(res);
      this.cardListData = res;
    }, () => {

    })
  }

  removeCard(id: any) {
    this._addCardService.removeCard(id).subscribe((res) => {
      console.log(res);
      this.getAllCard();
    }, () => {

    })
  }

  confirmRemoveCard(id: any) {
    let prompt = 'Are you sure you want to delete this card?';
    let title = 'Error';
    AppUtils.confirmModal(prompt, title, ConfirmAlertModalComponent, this.modalService).subscribe((isDelete) => {
      if (isDelete) {
        this.removeCard(id);
      }
    })
  }

  createCard(payload: any) {
    this._addCardService.createCard(payload).subscribe((res) => {
      console.log(res);
      this.getAllCard();
    }, () => {
    })
  }

  cardMask(cc: any) {
    if (cc) {
      return cc.replace(/.(?=.{4})/g, "X")
    }
    return null
  }

  checkCardType(value: any) {
    this.imgUrl = AppUtils.checkCardType(value, this.cardType);
    return this.imgUrl;
  }
}
