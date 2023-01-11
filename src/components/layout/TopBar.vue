<template>
    <div class="top-bar bg-white mb-3 pt-3 pb-3">
      <div class="row">
        <div class="col-md-2 text-center">
            <router-link to="/" class="text-warning">
              <div class="btn text-warning logo">
                meserie. EU
              </div>
            </router-link>
          <p><small class="text-warning">bratara de aur</small></p>
        </div>
        <div class="col-md-8">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Cautare" aria-label="Search">
          </form>
        </div>
        <div class="col-md-2">
          <a @click="logout" class="btn text-warning logo" v-if="displayName">Deconectare {{displayName}}</a>
          <router-link to="/profile"  class="nav-link bg-golden text-dark mt-1">Profil</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { query, where, orderBy, startAt, limit, doc, setDoc, createdAt, firestore, 
    collection, getDoc, getFirestore, updateDoc, getDocs, addDoc, 
    docChanges, auth, onSnapshot, snapshot,  getCountFromServer,
    arrayUnion, arrayRemove } from 'firebase/firestore'
  import { db }  from '@/firebase/init';

  export default {
    name: 'TopBar',
    data() {
      return {
        msg: 'publicitate',
        notifications: 0, 
        user: '',
        displayName: ''
      }
    },
    methods: {
      async logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          this.$router.push({name: 'Login'})
        }).catch((error) => {
          // An error happened.
        });
        }
    },
    async created() {
      const auth = await getAuth();

      await onAuthStateChanged(auth, () => {
        this.displayName = auth.currentUser.displayName
      });
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    a { 
      text-decoration: none;
    }
    .top-bar {  
      box-shadow: 0 4px 2px -2px lightgoldenrodyellow;
    }

    .bg-golden {
      background-color: lightgoldenrodyellow;
      padding: 10px;
    }

    .logo {
      border: dotted;
      border-radius: 5px;
    }
  </style>
  