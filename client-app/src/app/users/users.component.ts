import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { addDoc, collection, getDocs, getDoc, doc, getFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User, UserProfile } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public itemsCollection: AngularFirestoreCollection<User> | undefined;
  public users: any;

  constructor(
    public afAuth: AngularFireAuth,
    public afsAuth: AngularFirestore,
  ) { 
  

  }

  ngOnInit(): void {
    this.itemsCollection = this.afsAuth.collection<User>('users');
    this.users = this.itemsCollection.valueChanges()
  }

}
