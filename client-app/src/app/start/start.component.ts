import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FormBuilder, FormControl } from '@angular/forms';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  startForm: any;

  constructor(private fb: FormBuilder, public afsAuth: AngularFirestore) { 
    this.startForm = this.fb.group({
      email: new FormControl(''),
      name : new FormControl(''),
      city:  new FormControl(''),
      state:  new FormControl(''),
      qualification:  new FormControl(''),
      address:  new FormControl(''),
      phone:  new FormControl('')
    })
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    const db = this.afsAuth;
    db.collection("candidates").add(this.startForm.value)
    this.startForm.reset();
  }
}
