<template>
<b-container class="bv-example-row" style="min-height:900px">    
   <b-form-group
      id="fieldset1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
   >
   <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
  </b-form-group>

<b-card bg-variant="light">
  <b-form-group horizontal
                breakpoint="lg"
                label="로그인"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
    <b-form-group horizontal
                  label="ID:"
                  label-class="text-sm-right"
                  label-for="nestedStreet">
      <b-form-input id="nestedStreet" v-model="userinfo.id"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="PASSWORD:"
                  label-class="text-sm-right"
                  label-for="nestedCity">
      <b-form-input id="nestedCity" v-model="userinfo.pw"></b-form-input>
    </b-form-group>
    <!-- <b-form-group horizontal
                  label="E-MAIL:"
                  label-class="text-sm-right"
                  label-for="nestedState">
      <b-form-input id="nestedState"></b-form-input>
    </b-form-group> -->
  </b-form-group>
</b-card>
<div class="float-right">  
  <b-button v-on:click="post">로그인</b-button>
  <b-button v-on:click="post2">로그인2</b-button>
</div>

</b-container>
    
</template>

<script>
import axios from "axios";

export default {
  computed: {
    state() {
      return this.name.length >= 4 ? true : false;
    },
    invalidFeedback() {
      if (this.name.length > 4) {
        return "";
      } else if (this.name.length > 0) {
        return "Enter at least 4 characters";
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return this.state === true ? "Thank you" : "";
    }
  },
  data() {
    return {
      name: "",
      userinfo: {
        id: "",
        pw: ""
      }
    };
  },
  methods: {
    post: function() {
      // console.log("Vue post데이터전송");
      // console.log(this.userinfo.id + this.userinfo.pw );
      // this.$http
      //   .post("http://localhost:3000/user/login", this.userinfo)
      //   .then(function(data) {
      //     console.log('data : ' + data);
      //     console.log('data : ' + JSON.stringify(data));
      //   });

      axios("http://localhost:3000/user/login", {
        method: "post",
        withCredentials: true
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    post2: function() {
      axios("http://localhost:3000/user/cc", {
        method: "get",
        withCredentials: true
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      // axios
      //   .get("http://localhost:3000/user/cc", {
      //     firstName: "Fred",
      //     lastName: "Flintstone"
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style>

</style>