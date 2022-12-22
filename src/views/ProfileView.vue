<template>
    <div class="signup container">
        <div class="row">
            <div class="card" v-if="feedback">
                <small class="text-danger">{{feedback}}</small>
            </div>
            <div class="col s6 m5">
                <form @submit.prevent="update" class="card-panel">
                    <div class="field">
                        <label>Nume</label>
                        <input type="text" name="displayName" v-model="displayName" />
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="email" name="email" v-model="email" />
                    </div>
                    <div class="field">
                        <label>Parola</label>
                        <input type="password" name="password" v-model="password" />
                    </div>

                    <div class="field">
                        <label>Poza</label>
                        <input type="file" @change="handleChange" />
                    </div>
                    <button class="btn deep-purple" type="submit" name="action">
                        actualizare
                    </button>
                    
                </form>
            </div>
            <div class="col s6 m5 p5">
                <img :src="photoURL" width="250" height="250"/>
            </div> 
        </div>
    </div>
  </template>
  
  <script>
  import { getAuth, updateProfile, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
  import { getStorage, ref, uploadBytes } from "firebase/storage"

  export default {
    name: 'ProfileView',
    data() {
        return {
            password: '',
            displayName: '',
            email: '',
            feedback: '',
            photoURL: ''
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            this.displayName = user.displayName
            this.photoURL = user.photoURL
            // ...
        } else {
            // User is signed out
            // ...
        }
        });
    },
    methods: {
        update() {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: this.displayName, 
                photoURL: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
            }).then((res) => {
                this.feedback = "Actualizat cu succes"
            }).catch((error) => {
            // An error occurred
            // ...
            });

        },
        handleChange(e) {
            const selected = e.target.files;
            const auth = getAuth();
            const types = ['image/png', 'image/jpeg'];
            if (selected && types.includes(selected.type)) {
                const storage = getStorage();
                const storageRef = ref(storage, `covers/${auth.currentUser.uid}/${selected.value}`);

                ref.put(storageRef).then((snapshot) => {
                    console.log(snapshot)                    

                });
            }

        }
    }
  }
  </script>
  <style>
  .text-success {
    color: greenyellow;
  }

  .deep-purple {
    color: #fff;
  }
</style>
  