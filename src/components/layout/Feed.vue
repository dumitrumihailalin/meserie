<template>
  <div class="container-feed">
    <h1>Cauti un meserias ?</h1>
    <h2>Aici vei gasi</h2>
    <h3>TOTI SUNT CALIFICATI</h3>
    <form @submit.prevent="send" class="mb-3">
      <div class="form-group">
        <label>Cererea ta</label>
        <textarea class="form-control" rows="3" v-model="content" placeholder="Vreau sa renovez in casa si caut un meserias zugrav"></textarea>
      </div>
      <div class="form-group">
        <label>Locatia ta</label>
        <input type="text" class="form-control" rows="3" v-model="city" placeholder="Bucuresti"/> 
      </div>
      <div class="form-group">
        <label>Buget aproximativ (RON)</label>
        <input type="text" class="form-control" rows="3" v-model="budget" placeholder="1000"/> 
      </div>
      <div class="form-group">
        <button class="btn btn-outline-warning mt-3">Trimite</button>
      </div>
    </form>
    <div class="loading" v-if="loading">
      <p>Va rugam asteptati</p>
    </div>
    <div class="feed p-3 mt-3 row" v-for="(feed, index) in feeds" :key="index">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-3">
            <div class="profile-image">
              <img class="profile" src="https://firebasestorage.googleapis.com/v0/b/meserie-client-app.appspot.com/o/users%2F4Tpp4lkN4KVQUNd8m34lohoTvXe2%2Fprofile-image?alt=media&token=da4768a6-a423-43a9-8fd0-2f027e93f0e4" width="100" height="100"/>
            </div>
          </div>
          <div class="col-md-9">
            <h3>{{ feed.user }}</h3>
            <p>Creat la: {{ format_date(feed.createdAt) }}</p>  
          </div>
        </div>
        <div class="row">
          <div class="content">
            <p>{{feed.content}}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bg-white row">
          <div class="col-sm-2 text-center">
            <p>
              <i :class="[feed.likes.includes(user) ? danger : warning]" class="fa fa-thin fa-heart" @click="toggleDark(feed)"></i>
              Aprecieri {{ feed.likes.length }}
            </p>
          </div>
          <div class="col-sm-4 text-center" v-if="feed.user_id != user">
            <a :href="'/offer/' + feed.id" class="text-warning">
              <div class="btn text-warning logo">
                <p>Trimite oferta</p>
              </div>
            </a>
          </div>

          <div class="col-sm-3 text-center">
            <p>Locatia: {{ feed.city }}</p>
          </div>
          <div class="col-sm-3 text-center">
            <p>Buget: {{ feed.budget }}</p>
          </div>
          <div class="col-sm-2 text-center p-1" v-if="feed.user_id == user">
            <button class="btn btn-warning">Editeaza: <i class="fa fa-thin fa-pencil"></i></button>
          </div>
      </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>

import { query, where, orderBy, startAt, limit, doc, setDoc, createdAt, firestore,
  Timestamp, collection, getDoc, getFirestore, updateDoc, getDocs, addDoc, 
  docChanges, auth, onSnapshot,
  arrayUnion, arrayRemove } from 'firebase/firestore'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { db }  from '@/firebase/init';
import moment from 'moment'

export default {
    name: 'Feed',
    data() {
      return {
        msg: 'feed content',
        feeds: [],
        isActive: true,
        content: null,
        loading: false,
        budget: null,
        city: '',
        likes: [],
        warning: 'text-warning',
        danger: 'text-danger'
      }
    },
    async created() {
      this.loading = true

      const auth = getAuth();
      await onAuthStateChanged(auth, (user) => {
        this.user = user.uid;
      });
      const collRef = collection(db,"feeds");

      const q = query (collRef, orderBy("createdAt", "desc"));

      await onSnapshot(q, (querySnapshot) => {
        this.feeds = querySnapshot.docs.map( doc => ({...doc.data(), id: doc.id}))
      })
      this.loading = false;
    },
    methods: {
      format_date(value){
         if (value) {
           return moment(value).format('YYYY-MM-DD hh:mm')
          }
      },
      async toggleDark(feed) {
        const auth = getAuth();
        const docRef = doc(db, "feeds", feed.id);
        
        await updateDoc(docRef, {
          likes: feed.likes.includes(auth.currentUser.uid) ? 
            arrayRemove(auth.currentUser.uid):
            arrayUnion(auth.currentUser.uid)
        });
        this.isActive = true
      },
      async send() {
        const auth = getAuth();

        let feed = { 
          'content': this.content, 
          'user': auth.currentUser.displayName,
          'user_id': auth.currentUser.uid,
          'city': this.city,
          'budget': this.budget,
          'createdAt': Date.now(),
          'likes': []
        };
        
        await addDoc(collection(db, "feeds"), feed);
        this.content = ''
        this.city = ''
        this.budget = ''
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .feed {
    background: lightgoldenrodyellow;
    border-radius: 5px;
  }

  .profile {
    border-radius: 5px;
  }

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 100;
  }
  </style>
  