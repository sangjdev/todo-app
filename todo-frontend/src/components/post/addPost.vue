<template>
<b-container class="bv-example-row" style="min-height:900px">    
    <b-row style="margin-top:25px;">
    <b-col cols="12" >        

        <div class="mt-3">
            <h3>제목</h3>
            <b-form-textarea id="textarea1"
                            name="title"
                            v-model="title"
                            placeholder="제목을 입력해주세요"
                            :rows="1"
                            :max-rows="10"
                            class="mt-3">
            </b-form-textarea>
            <!-- <pre class="mt-3">{{ text }}</pre> -->
        </div>
        <br>
        
        <div class="mt-3">
        <h3>카테고리 설정</h3>
        <b-row>        
        <b-col>
            <b-form-select v-model="selected1" :options="optioncate" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- 카테고리를 선택해주세요 --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->
                <!-- <option value="C">Option C</option>
                <option value="D">Option D</option> -->
                </b-form-select>
        </b-col>
        <b-col>
            <b-form-select v-model="selected2" :options="optionprior" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- 우선순위를 선택해주세요 --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->
                <!-- <option value="C">Option C</option>
                <option value="D">Option D</option> -->
                </b-form-select>
        </b-col>                
        </b-row>                

        <div>Selected: <strong>{{ selected1 }}</strong>, <strong>{{ selected2 }}</strong></div>

        </div>

        <br>

        <div class="mt-3">
        <h3>내용</h3>
        <b-form-textarea id="textarea1"
                        name="content"
                        v-model="content"
                        placeholder="TODO 리스트를 작성할 수 있습니다."
                        :rows="15"
                        :max-rows="15"
                        class="mt-3">
        </b-form-textarea>
        <!-- <pre class="mt-3">{{ text }}</pre> -->
        </div>

        <div class="mt-5 float-right">
            <b-btn v-on:click.prevent="post">저장</b-btn>            
        </div>
    </b-col>
    </b-row>
</b-container>
    
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      selected1: null,
      selected2: null,
      optioncate: [
        { value: "spring", text: "spring" },
        { value: "node.js", text: "node.js" }
      ],
      optionprior: [
        { value: "1", text: "우선순위-1" },
        { value: "2", text: "우선순위-2" }
      ],
      postinfo: {
        title: "title",
        content: "content",
        cate: "",
        prior: ""
      }
    };
  },
  methods: {
    post: function() {
        console.log("Vue post데이터전송");
      this.$http
        .post("http://localhost:3000/post/add", this.postinfo)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>

</style>