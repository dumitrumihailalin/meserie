<template>
    <div class="left-bar bg-golden bordered">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/"  class="nav-link text-dark">Acasa</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeftBar',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .bg-golden {
    background-color: lightgoldenrodyellow;
  }
  </style>
  