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
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col-md-2"  v-if="user">
          <a @click="logout" class="btn text-warning logo">Deconectare</a>
          <router-link to="/profile"  class="nav-link bg-golden text-dark mt-1">Profil</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  export default {
    name: 'TopBar',
    data() {
      return {
        msg: 'publicitate',
        user: null
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
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, () => {
            if (auth.currentUser) {
                this.user = auth.currentUser
            } else {
                this.$router.push({name: 'Login'});
            }
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
  