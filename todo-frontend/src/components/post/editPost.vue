<template>
<b-container class="bv-example-row" style="min-height:900px">    
    <b-row style="margin-top:25px;">
    <b-col cols="12" >        

        <div class="mt-3">
            <h3>제목</h3>
            <b-form-textarea id="textarea1"                            
                            v-model="postinfo.title"                            
                            :rows="1"                            
                            :max-rows="10"
                            class="mt-3">                            
            </b-form-textarea>            
        </div>
        <br>
        
        <div class="mt-3">
        <h3>카테고리 설정</h3>
        <b-row>        
        <b-col>
            <b-form-select v-model="postinfo.cate" :options="optioncate" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- Please select an option --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->                
                </b-form-select>
        </b-col>
        <b-col>
            <b-form-select v-model="postinfo.prior" :options="optionprior" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- Please select an option --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->                
                </b-form-select>
        </b-col>                
        </b-row>                

        <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->

        </div>

        <br>

        <div class="mt-3">
        <h3>내용</h3>
        <b-form-textarea id="textarea1"
                        v-model="postinfo.content"                        
                        :rows="15"
                        :max-rows="15"
                        class="mt-3">{{postinfo.content}}                        
        </b-form-textarea>
        <!-- <pre class="mt-3">{{ text }}</pre> -->
        </div>

        <div class="mt-5 float-right">
            <b-btn v-on:click="post">저장</b-btn>            
        </div>
    </b-col>
    </b-row>
</b-container>
    
</template>

<script>
export default {
  data() {
    return {
      optioncate: [
        { value: "spring", text: "spring" },
        { value: "node.js", text: "node.js" }
      ],
      optionprior: [
        { value: "1", text: "우선순위-1" },
        { value: "2", text: "우선순위-2" }
      ],
      postinfo: {
        id: this.$route.params.id,
        title: "",
        content: "",
        cate: null,
        prior: null
      }
      //
      //   blog: {},
      //   title: '',
      //   content: '',
      //   selected: null,
      //     options: [
      //         { value: 'A', text: 'Option A (from options prop)' },
      //         { value: 'B', text: 'Option B (from options prop)' }
      //     ]
    };
  },
  methods: {
    post: function() {
      console.log("Vue post데이터전송");
      this.$http
        .post("http://localhost:3000/post/edit/"+this.postinfo.id+"", this.postinfo)
        .then(function(data) {
          console.log(data);
          alert("333");
          location.href = "/";
        });
    }
  },
  created() {
    this.$http
      .get("http://localhost:3000/post/" + this.postinfo.id)
      .then(function(data) {
        return data.json();
        //  console.log(data);
        //  this.blog = data.body
      })
      .then(function(data) {
        console.log("data : " + data);
        console.log("data : ");
        console.log("data1111 : " + JSON.stringify(data));
        this.postinfo.title = data[0].post_title;
        this.postinfo.content = data[0].post_content;
        this.postinfo.cate = data[0].post_cate;
        this.postinfo.prior = data[0].post_prior;
      });
    //this.items[0].text = this.blog.post_cate; 이것을 여기에 씨는 동기처리되서 안된다.
  }
};
</script>

<style>

</style>