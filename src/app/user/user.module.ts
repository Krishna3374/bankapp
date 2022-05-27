import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankEntryComponent } from './bank-entry/bank-entry.component';
import { BankComponent } from './bank/bank.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    UserComponent,
    BankDetailsComponent,
    BankEntryComponent,
    BankComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
