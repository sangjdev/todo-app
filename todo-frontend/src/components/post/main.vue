<template>
<b-container class="bv-example-row" >    
    <b-row style="margin-top:25px;">
        <b-col cols="9" >
            <b-card no-body>
                <b-tabs card>
                    {{currentPage}}
                <b-tab title="전체" active>
                전체
                </b-tab>

                <b-tab title="Priority #1">
                d
                </b-tab>

                <b-tab title="Priority #2">
                Priority #2
                </b-tab>

                </b-tabs>             

                <div v-for="(blog,i) in blogs" :key="i">
                    <b-card v-bind:title=blog.post_title
                            v-bind:sub-title=blog.post_date>
                        <p class="card-text">
                            {{blog.post_content | snippet}}
                        </p>
                        <div class="text-right">                            
                            <router-link v-bind:to="'/edit/' + blog._pid">수정</router-link>
                            &nbsp;
                            <router-link v-bind:to="'/post/' + blog._pid ">더보기</router-link>
                        </div>
                    </b-card>
                </div>                

                <div style="margin-top:35px;">                    
                    <b-pagination align="center" size="md" :total-rows="100" v-model="currentPage" :per-page="10" v-on:input="post">
                    </b-pagination>
                    <br>                    
                </div>
            </b-card>
        </b-col>
        <b-col cols="3">
            <b-list-group>
                <div v-for="(menu,i) in menus" :key="i">                        
                        <b-list-group-item class="d-flex justify-content-between align-items-center">
                        {{menu.post_cate}}
                        <b-badge variant="primary" pill>{{menu.cnt}} </b-badge>
                        </b-list-group-item>
                </div>                
            </b-list-group>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      menus: [],
      pages: [],
      currentPage: 1
    };
  },
  created() {
    // console.log("currentPage : "+ this.currentPage);
    // this.currentPage = this.$route.params.id;
    this.$http
      .get("http://localhost:3000/post/")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        data.forEach(element => {
          console.log(element);
          this.blogs.push(element);
        });
      });
    this.$http
      .get("http://localhost:3000/post/menu")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        data.forEach(element => {
          this.menus.push(element);
          console.log(this.menu);
        });
      });
  },
  methods: {
    post: function() {
      let num = this.currentPage;
      console.log("this.current : " + num);
      this.$router.push('/' + num);
      //   location.href = "/" + num;

      // this.currentPage = this.$route.params.id;
      // console.log('123') ;
    }
  }
};
</script>

<style>

</style>