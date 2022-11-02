<template>
    <div class="jobdetails">
       <h3>{{ jobs[1].title}}</h3>
       <p>{{ jobs[1].description}}</p>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'JobDetails',
    data() {
        return {
            jobs: [
                {title: 'Senior PHP', description: 'The best of the best'},
                {title: 'Senior JS'},
                {title: 'Senior PYTHON'},
            ]
        }
    }
  }
  </script>
  <style scoped>
    .jobdetails {
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
    </style>