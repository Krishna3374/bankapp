import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = this.dbservice.getCurrentUser()
  users = this.dbservice.getUsers()
  saveMode: boolean = true
  constructor(private fb: FormBuilder, private dbservice: DbService) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'Pending' })

  save() {
    this.dbservice.addUser(this.userForm.value)
    this.userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'Pending' })
    this.users = this.dbservice.getUsers()
  }

  display(user: any) {
    this.saveMode = false
    this.userForm = this.fb.group({ username: user?.username, password: user?.password, isAdmin: user?.isAdmin, status: user?.status })
  }

  editUser() {
    this.saveMode = true
    this.dbservice.editUser(this.userForm.value)
    this.userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'Pending' })
    this.users = this.dbservice.getUsers()
  }

  clear() {
    this.saveMode = true
    this.userForm = this.fb.group({ username: '', password: '', isAdmin: false, status: 'Pending' })
  }

  remove(username: string) {
    this.dbservice.deleteUser(username)
    this.users = this.dbservice.getUsers()
  }

}
