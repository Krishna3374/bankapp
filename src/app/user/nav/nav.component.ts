import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user = this.dbservice.getCurrentUser()
  constructor(private dbservice: DbService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.dbservice.setCurrentUser(null)
    this.router.navigate(['/login'])
  }

}
