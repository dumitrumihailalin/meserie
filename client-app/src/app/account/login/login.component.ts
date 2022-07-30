import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) { 
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const result =  await this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
    localStorage.setItem('user', JSON.stringify(result.user));
  }

}
