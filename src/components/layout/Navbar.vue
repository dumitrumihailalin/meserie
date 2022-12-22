<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg deep-purple darken-1">
            <div class="container-fluid">
                <a href="/cursuri" class="brand-logo">Meserie.EU</a>
                <ul class="right dropdown"> 
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
                localStorage.removeItem('token')
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