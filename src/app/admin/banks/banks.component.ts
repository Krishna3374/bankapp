import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  status: any
  selection: any
  bic: string = ''
  instName: string = ''
  banks: any
  user = this.dbservice.getCurrentUser()

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap
    this.status = params.get('status')

    if(this.status) { this.selection = this.fb.group({ filter: this.status }) }
    else { this.selection = this.fb.group({ filter: 'Approved' }) }
    this.display()
  }

  display() {
    this.banks = this.dbservice.getBanksBy(this.selection.value.filter)
  }

  redirect(bic: string, mode: string) {
    this.router.navigate(['/admin/details', bic, mode])
  }

  getCurrent(bic: string, instName: string) {
    this.bic = bic
    this.instName = instName
  }

  approve() {
    this.dbservice.approveBank(this.bic)
    this.display()
  }

}
