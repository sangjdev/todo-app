<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/main">TODOLIST</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/post/add">TODO 작성</b-nav-item>
        <b-nav-item href="/main">TODO 리스트</b-nav-item>
        <!-- 프로퍼티 disabled -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="키워드를 입력해주세요"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">검색</b-button>
        </b-nav-form>
       
        <b-nav-item href="/login">로그인</b-nav-item>
        <b-nav-item href="/register">회원가입</b-nav-item>
        
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>

</style>