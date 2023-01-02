<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <nav>
        <div class="nav-bar">
          <router-link to="/" class="btn btn-sm  text-dark">Home</router-link>
          <router-link to="/about" class="btn btn-sm text-dark">About</router-link>
        </div>
      </nav> -->
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Navbar from './components/layout/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
