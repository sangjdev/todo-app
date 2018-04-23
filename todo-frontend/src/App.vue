<template>
  <div v-cloak>
    <app-header></app-header>
    <!-- <app-main></app-main>     -->
    <!-- <singlePost></singlePost> -->
    <!-- <addpost></addpost> -->
    <router-view></router-view>
    <app-footer></app-footer>    
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

<style>

</style>