import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  online = 'fa fa-user online';
  offline = 'fa fa-user offline';


  constructor(    
    public afAuth: AngularFireAuth,
    public afsAuth: AngularFirestore,
    public router: Router ) { }


  loggedinIcons() {
    return this.online;
  }

  offlineIcon () {
    return this.offline;
  }

  isLoggedin() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    } else {
      return false;
    }
  }
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    this.isLoggedin()
  }
}
