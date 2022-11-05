<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <a href="#" class="brand-logo left">Meserie.EU</a>
                <ul class="right"> 
                    <li><router-link :to="{name: 'ListView'}" v-if="!user">Cursuri</router-link></li>
                    <li><router-link :to="{name: 'Signup'}" v-if="!user">Cont nou</router-link></li>
                    <li><router-link :to="{name: 'Login'}" v-if="!user">Autentificare</router-link></li>
                    <li><a @click="logout" v-if="user">Deconectare {{user.email}}</a></li>
                </ul>
            </div>
        </nav>  
    </div>
</template>
<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
    name: 'Navbar',
    data() {
        return {
            user: null
        }
    },
    methods: {
        async logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                this.$router.push({name: 'Login'})
                this.user = null
            }).catch((error) => {
            // An error happened.
            });
        }
    },
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, () => {
            if (auth.currentUser) {
                this.user = auth.currentUser
            } else {
                this.$router.push({name: 'Login'});
            }
        });
    }
}
</script>
<style lang="stylesheet">
    
</style>