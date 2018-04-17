<template>
  <div>
    <app-header></app-header>
    <!-- <app-main></app-main>     -->
    <singlePost></singlePost>
    <!-- <addpost></addpost> -->
    <app-footer></app-footer>    
  </div>
</template>

<script>
import header from './components/header.vue'
import main from './components/main.vue'
import footer from './components/footer.vue'
import addPost from './components/addPost.vue'
import singlePost from './components/singlePost.vue'

export default {
  components: {
    'app-header': header,
    'app-main': main,    
    'app-footer': footer,
    'addpost': addPost,
    'singlePost': singlePost
  },
  data () {    
  },
  methods: {   
  }
}
</script>

<style>

</style>