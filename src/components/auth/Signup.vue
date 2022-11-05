<template>
    <div class="signup container">
        <div class="row">
            <form @submit.prevent="signup">
                <div class="col s6 m5">
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
                        trimite
                    </button>
                </div>
            </form>
        </div>
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
            phone: '',
            city: '',
            name: ''
        }
      },
      methods: {
        async signup() {
            let data = { email: this.email, phone: this.phone}
            const docRef = await addDoc(collection(db, "users"), data);
            console.log("Document written with ID: ", docRef.id);
            this.email = '';
            this.name = '';
            this.phone = '';
            this.city = '';
        }
      }
    }
  </script>
  