import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  static currentUser: User | null = null
  getCurrentUser() { return DbService.currentUser }
  setCurrentUser(user: User | null) { DbService.currentUser = user }

  getUser(username: string) {
    return this.http.get<User>(this.url + 'users/' + username)
  }

  getUsers() {
    return this.http.get<User[]>(this.url + 'users')
  }

  addUser(user: User) {
    return this.http.post(this.url + 'users', user)
  }

  editUser(username: string, user: User) {
    return this.http.put(this.url + 'users/' + username, user)
  }

  deleteUser(username: string) {
    return this.http.delete(this.url + 'users/' + username)
  }

  banks:  Bank[] = []
  //   new Bank('DEUTDEFFXXX', 'DEUTSCHE BANK AG', 'Deutsche Bank Frankfurt F',
  //   new Address(['TAUNUSANLAGE 12'], 'FRANKFURT AM MAIN', 'HESSE', 60262, 'GERMANY', 'DE'), ['EUR'], ['X'], 'Pending')
  // ]

  getBanksBy(status: string): Bank[] {
    return this.banks.filter(bank => bank.status == status)
  }

  approveBank(bic: string) {
    let index = this.banks.findIndex(bank => bank.bic == bic)
    this.banks[index].status = 'Approved'
  }

  getBank(bic: string) {
    return this.banks.find(bank => bank.bic == bic)
  }

  getBankRef(bic: string) {
    return this.banks.find(bank => bank.bic == bic)
  }
}

interface User {

  username: string

  password: string

  isAdmin: boolean

  status: string

}

interface Address {

  lines: string[]

  town: string

  subdiv: string

  zipcode: number

  country: string

  code: string

}

interface Bank {

  bic: string

  instName: string

  branchInfo: string

  address: Address

  currency: string[]

  payMode: string[]

  status: string

  changes: any

}