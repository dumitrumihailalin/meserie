<template>
    <div class="container-fluid text-center">
        <h1>Meserie. EU - Conectare</h1>
        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @submit.prevent="signup">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" v-model="email" />
                    </div>
                    <div class="form-group">
                        <label>Nume</label>
                        <input type="text" class="form-control" name="displayName" v-model="displayName" />
                    </div>
                    <div class="form-group">
                        <label>Parola</label>
                        <input type="password" class="form-control" name="password" v-model="password" />
                    </div>
                    <div class="form-group mt-3">
                        <router-link :to="{name: 'Recovery'}" class="btn btn-outline-warning margin-right">Recuperare parola</router-link>
                        <button class="btn btn-warning margin-right" type="submit" name="action">
                            Trimite
                        </button>
                        <router-link :to="{name: 'Login'}" class="btn btn-outline-warning">Conectare</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </template>
  <script>
  import { db }  from '@/firebase/init'
  import { getFirestore } from 'firebase/firestore'
  import { collection, getDocs, addDoc, auth } from 'firebase/firestore'
  import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

    export default {
      name: 'Signup',
      data() {
        return {
            email: '',
            password: '',
            displayName: ''
        }
      },
      methods: {
        async signup() {
            const auth = getAuth();

            createUserWithEmailAndPassword(auth, this.email, this.password, this.displayName)
            .then((userCredential) => {
                // Signed in 
                    updateProfile(auth.currentUser, {
                        displayName: this.displayName
                    }).then((res) => {
                        this.feedback = "Actualizat cu succes"
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });
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
  <style>
  .margin-right {
    margin-right: 5px;
  }
</style>