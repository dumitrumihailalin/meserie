import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/models/user-profile.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: any;
  private itemDoc: AngularFirestoreDocument<UserProfile> | undefined;
  items: Observable<any> | undefined;
  constructor(
    public fb: FormBuilder, 
    public afAuth: AngularFireAuth,
    public afsAuth: AngularFirestore) 
    { 
      this.profileForm = this.fb.group({
        email: new FormControl(''),
        password: new FormControl(''),
        name : new FormControl(''),
        city:  new FormControl(''),
        state:  new FormControl(''),
        qualification:  new FormControl(''),
        address:  new FormControl(''),
        phone:  new FormControl('')
      })
    }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
  }

  async update() {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.afsAuth.doc("/members/qLL41lhwCyQZkKoN8Ugc").update({name: 'Ion'});
    const ref = this.afsAuth.collection("members").doc();
    this.afsAuth.doc(`members/${ref}`).set(this.profileForm.value);
    this.afsAuth.doc(`users/${user.uid}`).set(this.profileForm.value);
  }
}


