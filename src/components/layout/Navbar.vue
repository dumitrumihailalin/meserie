<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <a href="#" class="brand-logo left">Meserie.EU</a>
                <ul class="right"> 
                    <li><RouterLink to="/signup">Cont nou</RouterLink></li>
                    <li><RouterLink to="/login">Autentificare</RouterLink></li>
                    <li><a @click="logout">Deconectare</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    name: 'Navbar',
    data() {
        return {

        }
    },
    methods: {
        async logout() {
            const auth = getAuth();
            await firebase.auth().signOut().then(() => {
                this.$router.push({name: 'Signup'});
            })
        }
    }
}
</script>
<style lang="stylesheet">
    
</style>