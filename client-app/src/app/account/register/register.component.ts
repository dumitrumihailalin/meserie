import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) { 
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }
  ngOnInit(): void {
  }

  onSubmit() {
    const user =  this.afAuth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
  }
}
