<template>
    <div class="container">
        <ul class="collection with-header">
            <li class="collection-header"><h4 class="bg-pirple">constructii</h4></li>
            <li class="collection-item"><div>sudor<router-link :to="{name: 'Curs', params: { id: 'sudor'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
            <li class="collection-item"><div>dulgher<router-link :to="{name: 'Curs', params: { id: 'dulgher'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
            <li class="collection-item"><div>zidar<router-link :to="{name: 'Curs', params: { id: 'zidar'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
            <li class="collection-item"><div>zugrav<router-link :to="{name: 'Curs', params: { id: 'zugrav'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
        </ul>
        <ul class="collection with-header">
          <li class="collection-header"><h4 class="bg-pirple">frizerie / beauty</h4></li>
          <li class="collection-item"><div>frizer<router-link :to="{name: 'Curs', params: { id: 'frizer'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
          <li class="collection-item"><div>coafez<router-link :to="{name: 'Curs', params: { id: 'coafez'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
          <li class="collection-item"><div>styler<router-link :to="{name: 'Curs', params: { id: 'styler'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
        </ul>
        <ul class="collection with-header">
          <li class="collection-header"><h4 class="bg-pirple">restaurant / bucatarie</h4></li>
          <li class="collection-item"><div>ospatar<router-link :to="{name: 'Curs', params: { id: 'ospatar'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
          <li class="collection-item"><div>bucatar<router-link :to="{name: 'Curs', params: { id: 'bucatar'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
          <li class="collection-item"><div>barman<router-link :to="{name: 'Curs', params: { id: 'barman'}}" class="secondary-content"><i class="material-icons">send</i></router-link></div></li>
        </ul>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ListView'
  }
  </script>
<style>
  .secondary-content {
    color: #5e35b1 !important;
  }

  .bg-pirple {
    background-color: #5e35b1 !important;
    width: 200px;
    padding: 5px;
    color: #fff;
  }
</style>
  