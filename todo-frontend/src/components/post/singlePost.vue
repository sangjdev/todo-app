<template>
  
  <b-container class="bv-example-row" style="min-height:900px">    
    <b-breadcrumb :items="items" class="mt-3"/>
    <b-card class="text-center">
        This is some text within the default card block.
    </b-card>
    <div>
        <b-card v-bind:title=blog.post_title class="mt-3">
                        
                <p>                
                {{blog.post_content}}
                </p>

            <a href="#"
            class="card-link">Card link</a>
            <b-link href="#"
                    class="card-link">Another link</b-link>
        </b-card>
    </div>
    <b-card class="text-center mt-3">
        This is some text within the default card block.
    </b-card> 
    </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "123",
          href: "#"
        },
        {
          text: "Priority#1",
          href: "#"
        }
      ],
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/post/" + this.id)
      .then(function(data) {
        return data.json();
        //  console.log(data);
        //  this.blog = data.body
      })
      .then(function(data) {
        this.blog = data[0];       
        console.log('blog.post_cate : '+ this.blog.post_cate);        
        this.items[0].text = this.blog.post_cate;
        this.items[1].text = this.blog.post_prior;
      });
      //this.items[0].text = this.blog.post_cate; 이것을 여기에 씨는 동기처리되서 안된다.
    
  },
  methods: {}
};
</script>

<style>

</style>