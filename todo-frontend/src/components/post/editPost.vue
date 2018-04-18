<template>
<b-container class="bv-example-row" style="min-height:900px">    
    <b-row style="margin-top:25px;">
    <b-col cols="12" >        

        <div class="mt-3">
            <h3>제목</h3>
            <b-form-textarea id="textarea1"
                            v-model="title"
                            placeholder="Enter something"
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
            <b-form-select v-model="selected" :options="options" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- Please select an option --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->
                <option value="C">Option C</option>
                <option value="D">Option D</option>
                </b-form-select>
        </b-col>
        <b-col>
            <b-form-select v-model="selected" :options="options" class="mb-3 float-left mt-3" >
                <template slot="first">
                    <!-- this slot appears above the options from 'options' prop -->
                    <option :value="null" disabled>-- Please select an option --</option>
                </template>
                <!-- these options will appear after the ones from 'options' prop -->
                <option value="C">Option C</option>
                <option value="D">Option D</option>
                </b-form-select>
        </b-col>                
        </b-row>                

        <div>Selected: <strong>{{ selected }}</strong></div>

        </div>

        <br>

        <div class="mt-3">
        <h3>내용</h3>
        <b-form-textarea id="textarea1"
                        v-model="content"
                        placeholder="Enter something"
                        :rows="15"
                        :max-rows="15"
                        class="mt-3">
        </b-form-textarea>
        <!-- <pre class="mt-3">{{ text }}</pre> -->
        </div>

        <div class="mt-5 float-right">
            <b-btn>저장</b-btn>            
        </div>
    </b-col>
    </b-row>
</b-container>
    
</template>

<script>
export default {
  data () {   
      return {
          title: '',          
          content: '',
          selected: null,
            options: [
                { value: 'A', text: 'Option A (from options prop)' },
                { value: 'B', text: 'Option B (from options prop)' }
            ]
      }      
  },
  methods: {    
  }
}
</script>

<style>
</style>