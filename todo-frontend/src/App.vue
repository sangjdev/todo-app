<template>
  <div>
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
import footer from './components/common/footer.vue'
import main from './components/post/main.vue'
import addPost from './components/post/addPost.vue'
import singlePost from './components/post/singlePost.vue'

export default {
  components: {
    'app-header': header,
    'app-main': main,    
    'app-footer': footer,
    'addpost': addPost,
    'singlePost': singlePost
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