import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutAddCardComponent } from './checkout-add-card/checkout-add-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewCardComponent } from './checkout-add-card/popup/add-new-card/add-new-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ConfirmAlertModalComponent } from './shared/components/confirm-alert-modal/confirm-alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutAddCardComponent,
    AddNewCardComponent,
    ConfirmAlertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
