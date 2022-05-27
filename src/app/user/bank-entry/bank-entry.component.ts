import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-bank-entry',
  templateUrl: './bank-entry.component.html',
  styleUrls: ['./bank-entry.component.css']
})
export class BankEntryComponent implements OnInit {

  bank: any
  isHidden: boolean = true
  entryForm: any
  user = this.dbservice.getCurrentUser()
  constructor(private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit(): void {
    this.cancel()
  }

  getBank(bic: string) {
    this.bank = this.dbservice.getBankRef(bic)
    this.isHidden = false
  }

  save() {
    this.cancel()
  }

  cancel() {
    this.isHidden = true    
    this.entryForm = this.fb.group({ bic: '', currency: '', payMode: '' })
  }
}
