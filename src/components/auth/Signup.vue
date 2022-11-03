<template>
    <div class="signup container">
        <form @submit.prevent="signup" class="card-panel">
            <div class="field">
                <label>Email</label>
                <input type="email" name="email" v-model="email" />
            </div>
            <div class="field">
                <label>Nume</label>
                <input type="text" name="name" v-model="name" />
            </div>
            <div class="field">
                <label>Telefon</label>
                <input type="text" name="phone" v-model="phone" />
            </div>
            <div class="field">
                <label>Judet</label>
                <input type="text" name="city" v-model="city" />
            </div>
            <button class="btn waves-effect deep-purple" type="submit" name="action">
                <i class="material-icons right">trimite</i>
            </button>
        </form>
    </div>
  </template>
  <script>
  import { db }  from '@/firebase/init'
  import { getFirestore } from 'firebase/firestore'
  import { collection, getDocs, addDoc } from 'firebase/firestore'

    export default {
      name: 'Signup',
      data() {
        return {
            email: '',
            phone: ''
        }
      },
      methods: {
        async signup() {
            let data = { email: this.email, phone: this.phone}
            const docRef = await addDoc(collection(db, "users"), data);
            console.log("Document written with ID: ", docRef.id);

        }
      }
    }
  </script>
  