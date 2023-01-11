<template>
    <div class="left-bar bg-golden bordered">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/"  class="nav-link text-dark btn-warning">Acasa</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cursuri"  class="nav-link text-dark">Cursuri de calificare</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark">Contact: webmaster@alinit.com</a>
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

  .left-bar {
    position: relative;
  }
  </style>
  