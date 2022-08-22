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

  loggedin: boolean = false;
  currentUser: any;
  title = 'meserie.eu'
  constructor(public accountService: AccountService, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
    const user = this.accountService.getUserId();
    
    if (user) {
      this.currentUser = this.accountService.getUserId();
    }
  }

  logout() {
    this.accountService.SignOut();
  }
}
