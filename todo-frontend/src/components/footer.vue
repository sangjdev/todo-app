<template>
  <b-navbar toggleable="md" type="dark" variant="info" style="margin-top:25px;">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">TODOLIST</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">TODO 작성</b-nav-item>
        <b-nav-item href="#">TODO 리스트</b-nav-item>
        <!-- 프로퍼티 disabled -->
      </b-navbar-nav>      

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data () {   
  },
  methods: {    
  }
}
</script>

<style>

</style>