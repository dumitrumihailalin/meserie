<template>
  <div class="recover container-fluid text-center">
    <h1>Meserie. EU - Recuperare parola</h1>
    <div class="col-md-6 mx-auto">
        <form @submit.prevent="recover">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" v-model="email" />
            </div>
            <div class="form-group">
              <button class="btn btn-warning mb-3 mt-3 margin" type="submit" name="action">
                Trimite E-Mail
              </button>
              <router-link :to="{name: 'Login'}" class="btn btn-outline-warning">Autentificare</router-link>
              <div class="bg-warning">
                <small class="text-danger">{{feedback}}</small>
              </div>
            </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import { db }  from '@/firebase/init'
  import { getFirestore } from 'firebase/firestore'
  import { collection, getDocs } from 'firebase/firestore'
  import { getAuth, sendPasswordResetEmail, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

    export default {
      name: 'Recovery',
      data() {
        return {
            email: '',
            password: '',
            feedback: ''
        }
      },
      methods: {
        
        async recover() {
          const userEmail = this.email;
          console.log(userEmail)
          const auth = getAuth();
          sendPasswordResetEmail(auth, userEmail)
            .then(() => {
              this.feedback = "Un email a fost trimis pentru a configura o noua parola"
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
  .margin {
    margin-right: 10px;
  }

</style>