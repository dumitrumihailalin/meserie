<template>
    <div class="row">
      <div class="container-fluid">
        <TopBar />
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
       <LeftBar />
      </div>
      <div class="col-md-8">
        <form @submit.prevent="save">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                  <label>Postare noua</label>
                  <input type="text" class="form-control" v-model="content">
              </div>
            </div>
          </div>
          <div class="form-group mt-3">
              <button class="btn btn-outline-warning">Actualizare</button>
          </div>
          </form>
      </div>
      <div class="col-md-2">
        <RightBar />
      </div>
    </div>
    <div class="row">
        <div class="container-fluid">
         <BottomBar />
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, updateProfile, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
  import { getStorage, ref, uploadBytes } from "firebase/storage"
  import TopBar from '@/components/layout/TopBar.vue'
  import LeftBar from '@/components/layout/LeftBar.vue'
  import RightBar from '@/components/layout/RightBar.vue'
  import BottomBar from '@/components/layout/BottomBar.vue'

  export default {
    name: 'Post',
    data() {
      return {
        content: ''
      }
    },
    components: {
        TopBar,
        LeftBar,
        RightBar,
        BottomBar
    },
    created() {

      const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            this.email = user.email;
            this.displayName = user.displayName;
            // this.photoURL = user.photoURL;
            // ...
        } else {
            // User is signed out
            // ...
        }
        });
    },
    methods: {
        save() {
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
  