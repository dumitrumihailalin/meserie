<template>
    <div class="feed p-3 row">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="bg-white p-1">
        <span class="text-warning"><i class="fa-regular fa-thumbs-up"></i></span>
      </div>
    </div>
    <div class="feed p-3 row mt-3">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="bg-white p-1">
        <span class="text-warning"><i class="fa-regular fa-thumbs-up"></i></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Feed',
    data() {
      return {
        msg: 'feed content'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .feed {
    background: lightgoldenrodyellow;
    border-radius: 5px;
  }

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 100;
  }
  </style>
  