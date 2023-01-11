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
      <div class="row">
        <div class="col-md-6">
          <p>Locatie {{  feed.city }}</p>
          <h3>{{  feed.content }}</h3>
          <small class="text-warning">Buget {{  feed.budget }}</small>
        </div>
        <div class="col-md-6">
          <form @submit.prevent="send" class="mb-3">
            <div class="form-group">
              <label>Suma dorita (RON)</label>
              <input type="number" class="form-control" min="0" v-model="offer"/> 
            </div>
            <div class="form-group">
              <label>Mentiuni / intrebari</label>
              <textarea class="form-control" rows="3" v-model="questions"></textarea> 
            </div>
            <div class="form-group">
              <button class="btn btn-outline-warning mt-3">Trimite</button>
            </div>
          </form>
        </div>
      </div>
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
  import { doc, getDoc, addDoc, collection } from "firebase/firestore";
  import { db }  from '@/firebase/init';
  
  import TopBar from '@/components/layout/TopBar.vue'
  import LeftBar from '@/components/layout/LeftBar.vue'
  import RightBar from '@/components/layout/RightBar.vue'
  import BottomBar from '@/components/layout/BottomBar.vue'

  export default {
    name: 'OfferView',
    data() {
      return {
        offer: '',
        questions: '',
        feed: {}
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
    async created() {
      const docRef = doc(db, "feeds", this.$route.params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.feed = docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    methods: {
        async send() {
          const auth = getAuth();

          let offered = {
            'feed_id': this.$route.params.id,
            'offer': this.offer,
            'questions': this.questions,
            'user': auth.currentUser.uid
          }
          await addDoc(collection(db, "offers"), offered);
          
          this.offer = '';
          this.questions = '';
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
  