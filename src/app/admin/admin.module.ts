import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BanksComponent } from './banks/banks.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AdminComponent,
    BanksComponent,
    BankDetailsComponent,
    UsersComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
