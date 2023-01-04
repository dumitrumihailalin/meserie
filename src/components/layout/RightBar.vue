<template>
    <div class="right-bar bg-golden">
      <h4 href="#" class="nav-link bg-golden text-dark">{{title}}</h4>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RightBar',
    data() {
      return {
        title: 'Sponsorizat'
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
  