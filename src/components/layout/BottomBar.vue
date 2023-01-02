<template>
    <div class="bottom-bar bg-white mb-3 pt-3 pb-3">
      <div class="row">
        <div class="container-fluid text-center">
          <p>www.meserie.eu</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  export default {
    name: 'BottomBar',
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
  