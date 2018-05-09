<template>
  <div v-cloak>
    <router-view name="app-header"></router-view>    
    <router-view name="app-content"></router-view>
    <!-- <router-view></router-view> -->        
    <router-view name="app-footer"></router-view>    
  </div>
</template>


<script>
import header from './components/common/header.vue'
import main from './components/post/main.vue'
import addPost from './components/post/addPost.vue'
import singlePost from './components/post/singlePost.vue'
import footer from './components/common/footer.vue'

export default {
  components: {
    'app-header': header,
    'app-main': main,        
    'addpost': addPost,
    'singlePost': singlePost,
    'app-footer': footer
  },
  data () {   
    return {

    } 
  },
  methods: {   
  }
}
</script>

<style scoped>
body {
  color:red;
  font-size: 300px;
}
</style>