<template>
    <div class="right-bar bg-golden">
      <router-link to="/profil"  class="nav-link bg-golden text-dark">Publicitate</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RightBar',
    data() {
      return {
        msg: 'publicitate'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .bg-golden {
    background-color: lightgoldenrodyellow;
  }
  </style>
  