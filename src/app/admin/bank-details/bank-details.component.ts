import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bic: any
  mode: any
  count: number = 0
  statusChanged: boolean = false
  currencyChanged: boolean = false
  paymodeChanged: boolean = false

  user: any
  bank: any
  detailsForm: any
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.bic = params.get('bic')
    this.mode = params.get('mode')

    this.user = this.dbservice.getCurrentUser()
    this.bank = this.dbservice.getBank(this.bic)

    this.detailsForm = this.fb.group({
      status: this.bank.status,
      currency: this.bank.currency[0],
      payMode: this.bank.payMode[0] })
  }

  getChanges() {
    this.count = 0
    if (this.detailsForm.value.currency != this.bank.currency[0]) {
      this.count += 1
      this.currencyChanged = true
    }
    if (this.detailsForm.value.payMode != this.bank.payMode[0]) {
      this.count += 1
      this.paymodeChanged = true
    }
    if (this.detailsForm.value.status != this.bank.status) {
      this.count += 1
      this.statusChanged = true
    }
  }

  saveChanges() {

  }

  cancel() {
    this.statusChanged = false
    this.currencyChanged = false
    this.paymodeChanged = false
  }

}
