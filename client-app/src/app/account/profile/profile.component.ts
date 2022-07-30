import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { addDoc, collection, getDocs, getDoc, doc } from '@angular/fire/firestore';
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
  itemDoc: AngularFirestoreDocument<any> | undefined;
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
    this.getUser();
    // getDocs(db).then((response) => {
    //   response.docs.map((item) => {
    //     console.log(item.data())
    //   })
    // })
  }

  async getUser() {
    const user = JSON.parse(localStorage.getItem('user')!);
    const db = collection(this.afsAuth.firestore, 'users');
    const docRef =   doc(db, user.uid);
    const docSnap =  await getDoc(docRef);
    this.profileForm.patchValue(docSnap.data())
  }

  async update() {
    const user = JSON.parse(localStorage.getItem('user')!);
    
    this.afsAuth.doc(`users/${user.uid}`).set(this.profileForm.value);
    const db = collection(this.afsAuth.firestore, 'members');
    addDoc(db, this.profileForm.value);
  }
}


