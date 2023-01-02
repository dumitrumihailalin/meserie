<template>
    <div class="top-bar bg-white mb-3 pt-3 pb-3">
      <div class="row">
        <div class="col-md-2 text-center">
          <div class="logo bg-golden">meserie. EU</div>
        </div>
        <div class="col-md-8">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col-md-2">
          <router-link to="/profile"  class="nav-link text-dark">
            {{user.email}}
          </router-link>
          <a @click="logout" class="btn text-dark bg-golden"  v-if="user">Deconectare</a>
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
        user: {
          emai: null
        }
      }
    },
    methods: {
      async logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                this.$router.push({name: 'Login'})
            }).catch((error) => {
              console.log(error)
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
  