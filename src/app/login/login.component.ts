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

  user: any
  isInvalid = false
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbService) {}
  ngOnInit() {
    this.user = this.dbservice.getCurrentUser()
    if (this.user) { this.redirect(this.user.isAdmin) }
  }

  loginForm = this.fb.group({ username: '', password: '' })

  login() {
    this.user = this.dbservice.getUser(this.loginForm.value.username)
    if (this.user.password != this.loginForm.value.password) {
      this.isInvalid = true
      this.loginForm.reset()
    }
    else {
      this.dbservice.setCurrentUser(this.user)
      this.redirect(this.user.isAdmin)
    }
  }

  redirect(isAdmin: boolean) {
    if (isAdmin) { this.router.navigate(['/admin']) }
    else { this.router.navigate(['/user']) }
  }

}
