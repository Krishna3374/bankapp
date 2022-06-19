import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInvalid = false
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbService) {}
  ngOnInit() {
    let user = this.dbservice.getCurrentUser()
    if (user) { this.redirect(user.isAdmin) }
  }

  loginForm = this.fb.group({ username: '', password: '' })

  login() {
    this.dbservice.getUser(this.loginForm.value.username).subscribe(user => {
      if (user.password != this.loginForm.value.password) {
        this.isInvalid = true
        this.loginForm.reset()
      }
      else {
        this.dbservice.setCurrentUser(user)
        this.redirect(user.isAdmin)
      }
    })
  }

  redirect(isAdmin: boolean) {
    if (isAdmin) { this.router.navigate(['/admin']) }
    else { this.router.navigate(['/user']) }
  }

}
