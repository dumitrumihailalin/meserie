<template>
    <div class="signup container">
        <form @submit.prevent="login" class="card-panel">
            <div class="field">
                <label>Email</label>
                <input type="email" name="email" v-model="email" />
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" name="password" v-model="password" />
            </div>
            <button class="btn waves-effect deep-purple" type="submit" name="action">
                <i class="material-icons right">trimite</i>
            </button>
        </form>
    </div>
  </template>
  <script>
  import { db }  from '@/firebase/init'
  import { getFirestore } from 'firebase/firestore'
  import { collection, getDocs } from 'firebase/firestore'
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


    export default {
      name: 'Login',
      data() {
        return {
            email: '',
            password: ''
        }
      },
      methods: {
        async login() {
          const auth = getAuth();
              signInWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });  
        }
      }
    }
  </script>
  