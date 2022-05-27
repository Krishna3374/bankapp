import { Injectable } from '@angular/core';
import { Address, Bank } from './entities/bank';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  static currentUser: User | null = null
  getCurrentUser() { return DbService.currentUser }
  setCurrentUser(user: User | null) { DbService.currentUser = user }

  users: User[] = [
    new User('Smith', '123', true, 'Approved'),
    new User('Jacob', '456', false, 'Pending'),
    new User('Harry', '789', false, 'Suspended')
  ]

  getUser(username: string): User | undefined {
    return this.users.find(user => user.username == username)
  }

  getUsers(): User[] {
    return this.users
  }

  addUser(user: User) {
    this.users.push(user)
  }

  editUser(user: User) {
    let index = this.users.findIndex(u => u.username == user.username)
    this.users[index] = user
  }

  deleteUser(username: string) {
    let index = this.users.findIndex(user => user.username == username)
    this.users.splice(index, 1)
  }

  banks:  Bank[] = [
    new Bank('DEUTDEFFXXX', 'DEUTSCHE BANK AG', 'Deutsche Bank Frankfurt F',
    new Address(['TAUNUSANLAGE 12'], 'FRANKFURT AM MAIN', 'HESSE', 60262, 'GERMANY', 'DE'), ['EUR'], ['X'], 'Pending')
  ]

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
