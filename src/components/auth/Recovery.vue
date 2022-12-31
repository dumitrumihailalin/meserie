<template>
    <div class="recovery container">
        <form @submit.prevent="recover" class="card-panel">
            <div class="field">
                <label>Email</label>
                <input type="email" name="email" v-model="email" />
            </div>
            <button class="btn waves-effect deep-purple" type="submit" name="action">
              trimite
            </button>
            <div class="bg-danger">
              <small class="text-danger">{{feedback}}</small>
            </div>
        </form>
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
              console.log("Reset password link has been sent")
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
  .bg-danger {
    color: red;
  }
</style>