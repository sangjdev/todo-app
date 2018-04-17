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

                <div>
                    <b-card title="Card title"
                            sub-title="Card subtitle">
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>

                <div>
                    <b-card title="Card title"
                            sub-title="Card subtitle">
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>

                <div>
                    <b-card title="Card title"
                            sub-title="Card subtitle">
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>
                
                <div>
                    <b-card title="Card title"
                            sub-title="Card subtitle">
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>

                <div>
                    <b-card title="Card title"
                            sub-title="Card subtitle">
                        <p class="card-text">
                            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                        </p>
                        <a href="#"
                        class="card-link">Card link</a>
                        <b-link href="#"
                                class="card-link">Another link</b-link>
                    </b-card>
                </div>

                <div style="margin-top:35px;">                    
                    <b-pagination align="center" size="md" :total-rows="100" v-model="currentPage" :per-page="10">
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
  data () {   
  },
  methods: {    
  }
}
</script>

<style>
</style>