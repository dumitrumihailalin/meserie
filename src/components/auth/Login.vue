<template>
    <div class="container-fluid text-center">
      <h1>Meserie. EU - Conectare</h1>
      <div class="col-md-6 mx-auto">
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control"  name="email" v-model="email" />
            </div>
            <div class="form-group">
                <label>Parola</label>
                <input type="password" class="form-control" name="password" v-model="password" />
            </div>
            <div class="form-group mt-3">
              <button class="btn btn-warning ml-3" type="submit" name="action">
                Conectare
              </button>
              </div>
            <div class="form-group mt-3">
              <router-link :to="{name: 'Recovery'}" class="btn btn-outline-warning margin-right">Recuperare parola</router-link>
              <router-link :to="{name: 'Signup'}" class="btn btn-warning">Cont nou</router-link>
              <div class="bg-danger">
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
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import TopBar from '../layout/TopBar.vue';
    export default {
      name: 'Login',
      data() {
        return {
            email: '',
            password: '',
            feedback: ''
        }
      },
      components: {
        TopBar
      },
      methods: {
        async login() {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in 
            this.$router.push({name: 'home'})
          })
          .catch((error) => {
            // const errorCode = error.code;
            this.feedback = error.message;
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