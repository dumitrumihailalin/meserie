<template>
  <div class="container-feed mt-5">
    <form @submit.prevent="send" class="mb-3">
      <div class="form-group">
        <textarea class="form-control" rows="3" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-outline-warning mt-3">Trimite</button>
      </div>
    </form>
    <div class="feed p-3 mt-3 row" v-for="(feed, index) in feeds" :key="index">
      <p>{{feed.content}}</p>
      <div class="bg-white p-1">
        <div class="row">
          <div class="col-md-3 text-center">
            <span class="text-warning">
              <i class="static-class" 
                :class="[feed.like && feed.total_likes 
                  ? 'fa-regular fa-thumbs-up text-dark' 
                  : 'fa-regular fa-thumbs-up text-warning']" 
                  @click="toggleDark(feed.user)">
              </i>
              {{  feed.total_likes }}
            </span>
          </div>
          <div class="col-md-3 text-center">
            Comment
          </div>
          <div class="col-md-3 text-center">
            Share
          </div>
          <div class="col-md-3 text-center">
            Invite
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>

import { getFirestore } from 'firebase/firestore'
import { query, where, orderBy, limit, doc, setDoc, Timestamp, collection, getDoc, getDocs, addDoc, auth } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db }  from '@/firebase/init';

export default {
    name: 'Feed',
    data() {
      return {
        msg: 'feed content',
        feeds: [],
        content: null,
      }
    },
    created() {
      this.getFeed();
    },
    methods: {
      async getFeed() {
        const q = query(collection(db, "feeds"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
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
          'like': false,
          'total_likes': 0
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

  .container-feed {
    border: 1px solid lightgoldenrodyellow;
  }

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 100;
  }
  </style>
  