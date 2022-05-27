import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bic: any
  bank: any
  user = this.dbservice.getCurrentUser()
  constructor(private route: ActivatedRoute, private dbservice: DbService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.bic = params.get('bic')
    this.bank = this.dbservice.getBank(this.bic)
  }

}
