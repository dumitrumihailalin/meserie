import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { addDoc, collection, getDocs, getDoc, doc, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getStorage, ref } from "firebase/storage";

import { Observable } from 'rxjs';
import { UserProfile } from 'src/models/user-profile.model';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: any;
  itemDoc: AngularFirestoreDocument<any> | undefined;
  items: Observable<any> | undefined;
  downloadUrl: Observable<string>;
  uid: string | null;

  constructor(
    public fb: FormBuilder, 
    public afAuth: AngularFireAuth,
    public afsAuth: AngularFirestore,
    public afStorage: AngularFireStorage,
    public accountService: AccountService,
    private route: ActivatedRoute) 
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

      this.uid = this.route.snapshot.paramMap.get('id');
      this.downloadUrl = this.afStorage.ref(`users/${this.uid}/profile-image`).getDownloadURL();

    }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
      const db = getFirestore();
      const docRef = doc(db, "users", `${this.uid}`);
      const docSnap = await getDoc(docRef);
      this.profileForm.patchValue(docSnap.data())
  }

  async updateProfile() {
      this.afsAuth.doc(`users/${this.uid}`).set(this.profileForm.value);
  }

  async fileChange(event: any) {
    const file = event.target.files[0]
    const filePath = `users/${this.uid}/profile-image`;
    await this.afStorage.upload(filePath, file);
    const fileref = this.afStorage.ref(filePath);
    this.downloadUrl =  fileref.getDownloadURL();
  }
}


