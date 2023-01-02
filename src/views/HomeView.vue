<template>
  <div class="row">
    <div class="container-fluid">
     <TopBar />
    </div>
  </div>
  <div class="row">
    <div class="col-md-2">
     <LeftBar />
    </div>
    <div class="col-md-8">
      <Feed />
    </div>
    <div class="col-md-2">
      <RightBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/layout/HelloWorld.vue'
import LeftBar from '@/components/layout/LeftBar.vue'
import RightBar from '@/components/layout/RightBar.vue'
import Feed from '@/components/layout/Feed.vue'
import TopBar from '@/components/layout/TopBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TopBar,
    LeftBar,
    RightBar,
    Feed
  }
}
</script>
