import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { jsonEval } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  online = 'fa fa-user online';
  offline = 'fa fa-user offline';
  result: any;


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

  getUserId() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user).user.uid;
    } 
  }

  isLoggedin() {
    const user = localStorage.getItem('user');
    if (user) {
      return true
    } else {
      return false;
    } 
  }

  async SignIn(email: string, password: string) {
    await this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => { 
        this.result = result
        this.router.navigate([`/profile/${this.result.user.uid}`]);

        localStorage.setItem('user', JSON.stringify(result));
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
