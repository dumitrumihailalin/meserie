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

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    });
  }
}
