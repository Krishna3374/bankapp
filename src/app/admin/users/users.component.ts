import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any
  saveMode: boolean = true
  userForm: any
  constructor(private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit(): void {
    this.getUsers()
    this.resetForm()
  }

  resetForm() {
    this.userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'Pending' })
  }

  getUsers() {
    this.dbservice.getUsers().subscribe(users => this.users = users)
  }

  save() {
    this.dbservice.addUser(this.userForm.value).subscribe(res => { 
      console.log(res)
      this.getUsers()
    })
    this.resetForm()
  }

  display(user: any) {
    this.saveMode = false
    this.userForm = this.fb.group({ username: user?.username, password: user?.password, isAdmin: user?.isAdmin, status: user?.status })
  }

  editUser() {
    this.saveMode = true
    this.dbservice.editUser(this.userForm.value.username, this.userForm.value).subscribe(res => { 
      console.log(res)
      this.getUsers()
    })
    this.resetForm()
  }

  clear() {
    this.saveMode = true
    this.resetForm()
  }

  remove(username: string) {
    this.dbservice.deleteUser(username).subscribe(res => { 
      console.log(res)
      this.getUsers()
    })
  }

}
