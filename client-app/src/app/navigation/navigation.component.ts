import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  UserId: any;
  constructor(public accountService: AccountService, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
    const user = this.accountService.isLoggedin();
    if (user) {
      this.UserId = user.uid;
    } else {
      this.UserId = false;
    }
  }

  logout() {
    this.accountService.SignOut();
  }
}
