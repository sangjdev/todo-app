<template>
  
  <b-container class="bv-example-row" style="min-height:900px">    
    <b-breadcrumb :items="items" class="mt-3"/>
    <b-card class="text-center">
        This is some text within the default card block.
    </b-card>
    <div>
        <b-card title="Card title" class="mt-3">
            
                <p>
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                 very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                 from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original 
                form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>

                <p>
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                 very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                 from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original 
                form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>

                <p>
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                 very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                 from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original 
                form, accompanied by English versions from the 1914 translation by H. Rackham.
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
  data () {   
      return {
      items: [{
        text: 'Node.js',
        href: '#'
      }, {
        text: 'Priority#1',
        href: '#'
      }]
    }
  },
  methods: {    
  }
}
</script>

<style>

</style>