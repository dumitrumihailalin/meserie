<template>
    <div class="container-fluid">
        <h2>Curs ales: {{curs}}</h2>
        <div class="col s3 m5">
            <form @submit.prevent="signup">
                <div class="col s3 m5">
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
                    <button class="deep-purple darken-1" type="submit" name="action">
                        trimite
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db }  from '@/firebase/init'

export default {
    name: 'ChosedCourseView',
    data() {
        return {
            curs: '',
            email: '',
            phone: '',
            city: '',
            name: ''
        }
    },
    created() {
        this.curs = this.$route.params.id

    },
    methods: {
        async signup() {
            if (this.email == '') {
                alert('Va rugam speficati un email');
                return
            }

            if (this.name == '') {
                alert('Va rugam speficati un nume');
                return
            }

            if (this.city == '') {
                alert('Va rugam speficati un oras');
                return
            }
            if (this.phone == '') {
                alert('Va rugam speficati un telefon');
                return
            }

            if (this.curs == '') {
                alert('Va rugam speficati un curs');
                return
            }

            let data = { email: this.email, name: this.name, city: this.city, curs: this.curs, phone: this.phone}
            const docRef = await addDoc(collection(db, "candidates"), data);
            console.log("Document written with ID: ", docRef.id);
            this.email = '';
            this.name = '';
            this.phone = '';
            this.city = '';
        }
    }
}
</script>
<style>
    .deep-purple {
        color: #fff;
    }
</style>