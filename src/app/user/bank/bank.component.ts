import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  status: any
  selection: any
  banks: any
  user = this.dbservice.getCurrentUser()

  constructor(private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.status = params.get('status')

    if(this.status) { this.selection = this.fb.group({ filter: this.status }) }
    else { this.selection = this.fb.group({ filter: 'Approved' }) }
    this.display()
  }

  display() {
    this.banks = this.dbservice.getBanksBy(this.selection.value.filter)
  }

  redirect(bic: string) {
    this.router.navigate(['/user/details', bic])
  }

}
