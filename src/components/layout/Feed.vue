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
    <div class="feed p-3 mt-3 row" v-for="(feed, index) in feeds" :key="index">
      <div class="col-md-3">
        {{ feed.user }}
      </div>
      <p>{{feed.content}}</p>
      <div class="bg-white p-1">
        <div class="row">
          <!-- <div class="col-md-3 text-center">
            <span class="text-warning">
              <i class="static-class" 
                :class="[feed.like && feed.total_likes 
                  ? 'fa-regular fa-thumbs-up text-dark' 
                  : 'fa-regular fa-thumbs-up text-warning']" 
                  @click="toggleDark(feed.user)">
              </i>
              {{  feed.total_likes }}
            </span>
          </div> -->
          <div class="col-md-3 text-center">
            Trimite E-Mail
          </div>
          <div class="col-md-3 text-center">
            Copiaza postare
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

import { getFirestore } from 'firebase/firestore'
import { query, where, orderBy, startAt, limit, doc, setDoc, createdAt,
  Timestamp, collection, getDoc, getDocs, addDoc, docChanges, auth, onSnapshot } from 'firebase/firestore'
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
        count: 10
      }
    },
    created() {
      this.getFeed();
    },
    methods: {
      async getFeed() {
        const q = query(collection(db, "feeds"), orderBy("createdAt"), limit(this.count));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach( doc  => {
            this.feeds.push({...doc.data(), id: doc.id});
          });
      },
      toggleDark(user) {
        this.thumb = !this.thumb
      },
      async send() {
        const auth = getAuth();

        const feed = { 
          'content': this.content, 
          'user': auth.currentUser.displayName,
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
  