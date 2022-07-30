import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  online = 'fa fa-user online';
  offline = ' fa fa-user offline'

  constructor() { }


  loggedinIcons() {
    return this.online;
  }
}
