<template>
  <div class="container-feed">
    <form @submit.prevent="send" class="mb-3">
      <div class="form-group">
        <textarea class="form-control" rows="3" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-outline-warning mt-3">Trimite</button>
      </div>
    </form>
    <div class="loading" v-if="loading">
      <p>Va rugam asteptati</p>
    </div>
    <div class="feed p-3 mt-3 row" v-for="(feed, index) in feeds" :key="index">
      <div class="col-md-3">
        {{ feed.user }}
      </div>
      <p>{{feed.content}}</p>
      <div class="bg-white p-1">
        <div class="row">
          <div class="col-md-3 text-center">
            <i :class="[feed.likes.includes(user) ? danger : warning]" class="fa fa-thin fa-heart" @click="toggleDark(feed)"></i>
          </div>
          <div class="col-md-3 text-center">
            Trimite E-Mail
          </div>
          <div class="col-md-3 text-center">
            Copiaza postare
          </div>
          <div class="col-md-3 text-center">
            Aprecieri {{ feed.likes.length }}
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

export default {
    name: 'Feed',
    data() {
      return {
        msg: 'feed content',
        feeds: [],
        isActive: true,
        content: null,
        loading: false,
        user: "",
        likes: [],
        warning: 'text-warning',
        danger: 'text-danger'
      }
    },
    async created() {
      this.loading = true

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.user = user.uid;
      });
      onSnapshot(collection(db, "feeds"), (querySnapshot) => {
        this.feeds = querySnapshot.docs.map( doc => ({...doc.data(), id: doc.id}))
      })
      this.loading = false;
    },
    methods: {
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
          'likes': [],
          'createdAt': new Date().toLocaleString()
        };
        
        await addDoc(collection(db, "feeds"), feed);
        this.content = ''
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

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 100;
  }
  </style>
  