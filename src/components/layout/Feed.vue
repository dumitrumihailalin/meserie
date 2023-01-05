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
            <span class="text-warning" @click="toggleDark(feed)">Apreciaza</span>
          </div>
          <div class="col-md-3 text-center">
            Trimite E-Mail
          </div>
          <div class="col-md-3 text-center">
            Copiaza postare
          </div>
          <div class="col-md-3 text-center">
          <p>Aprecieri  
            {{ Object.keys(feed.likes).length  }}
          </p> 
        </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- <a @click="loadMore">{{loadMore}}</a> -->
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
        content: null,
        user: null,
        count: 10,
        loading: false,
        likes: []
      }
    },
    created() {
      this.getFeed();
    },
    methods: {
      async getFeed() {
        this.loading = true
        const q = query(collection(db, "feeds"), orderBy("createdAt"), limit(this.count));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach( doc  => {
            this.feeds.push({...doc.data(), id: doc.id});
          });
        this.loading = false;
      },
      async toggleDark(feed) {
        const auth = getAuth();
        const db = getFirestore();
        const docRef = doc(db, "feeds", feed.id);
       
        await updateDoc(docRef, {
          likes: feed.likes.includes(auth.currentUser.uid) ? 
                            arrayRemove(auth.currentUser.uid):
                            arrayUnion(auth.currentUser.uid)
        });
        this.feeds = []
        this.getFeed();
      },
      async send() {
        const auth = getAuth();

        const feed = { 
          'content': this.content, 
          'user': auth.currentUser.displayName,
          'likes': [],
          'createdAt': Date.now()
        };
        
        await addDoc(collection(db, "feeds"), feed);
        this.content = ''
        this.feeds.push(feed)
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
  