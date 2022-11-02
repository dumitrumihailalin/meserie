<template>
    <div class="jobs">
        <div class="jobroute" v-for="job in jobs" :key="job.id">
          <router-link :to="{ name: 'JobDetailsView', params: {id: job.id} }">
            {{ job.title }}
          </router-link>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'Jobs',
    data() {
      return {
        jobs: [
          {title: 'senior php', id: 1},
          {title: 'senior js', id: 2},
        ]
      }
    }
  }
  </script>
  <style scoped>
    .jobs {
        margin: 0 auto;
        text-align: center;
        width: 50%;
    }

    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 0 10px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
    }

    a:hover {
      border: 1px solid #fff;
      padding: 4px;
    }

    .jobroute {
      background-color: #ff0000;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    </style>