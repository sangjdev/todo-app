<template>
<b-container class="bv-example-row" >    
    <b-row style="margin-top:25px;">
        <b-col cols="9" >
            <b-card no-body>
                <b-tabs card>

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
                    <b-pagination align="center" size="md" v-bind:limit=paginationOptions.limit :total-rows="100" v-model="currentPage" :per-page="5">
                    </b-pagination>
                    <br>
                </div>
            </b-card>
        </b-col>
        <b-col cols="3">
            <b-list-group>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                Spring    
                <b-badge variant="primary" pill>14</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center">
                Node.js
                <b-badge variant="primary" pill>2</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center">
                Vue.js
                <b-badge variant="primary" pill>1</b-badge>
                </b-list-group-item>
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
          pages: [],
          'currentPage': 1,          
          paginationOptions: {
            limit: 5,
            previousText: 'Prev',
            nextText: 'Next',
            alwaysShowPrevNext: true
        }
      }      
  },
  created() {
    this.$http
      .get('http://localhost:3000/post/')
      .then(function(data) {    
        
        return data.json();        
      }).then(function (data) {
        data.forEach(element => {
            console.log(element);
            this.blogs.push(element);
        });
        // console.log("data : "+data);
        // var blogsArray = [];
        // for (let key in data) {
        //   // console.log(data[key]);
        //   data[key]._pid = key;
        //   blogsArray.push(data[key])
        // }
        // console.log("blogsArray: " + blogsArray);
        // this.blogs = blogsArray;
        // console.log("this.blogs: " + this.blogs);

        // var blogsArray = [];
        // for (let key in data) {
        //   // console.log(data[key]);
        //   data[key].id = key;
        //   blogsArray.push(data[key])
        // }
        // this.blogs = blogsArray;
        // // console.log(data);
        // console.log(blogsArray);
      })
  },
  methods: {
      range: function (start, end) {
          
      }
  }
}
</script>

<style>
</style>