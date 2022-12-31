<template>
    <div class="signup container">
        <div class="row">
            <form @submit.prevent="signup">
                <div class="col s6 m5">
                    <div class="field">
                        <label>Email</label>
                        <input type="email" name="email" v-model="email" />
                    </div>
                    <div class="field">
                        <label>Parola</label>
                        <input type="password" name="password" v-model="password" />
                    </div>
                    <router-link :to="{name: 'Recovery'}" class="btn btn-danger">Recuperare parola</router-link>
                    <button class="btn waves-effect deep-purple" type="submit" name="action">
                        trimite
                    </button>
                </div>
            </form>
        </div>
    </div>
  </template>
  <script>
  import { db }  from '@/firebase/init'
  import { getFirestore } from 'firebase/firestore'
  import { collection, getDocs, addDoc, auth } from 'firebase/firestore'
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    export default {
      name: 'Signup',
      data() {
        return {
            email: '',
            password: '',
        }
      },
      methods: {
        async signup() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.timeLog(user)
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
  