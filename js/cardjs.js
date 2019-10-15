Vue.component('card-js', {
    template:
    `
    <div class="cajacartas">

        <div class="cart cont wrap" v-for=" card in cardsjs" >
            <div class="contcart">
                <p class="titulocart">{{card.t}}</p>
                <div class="descripcionbox">
                    <p class="des">{{card.d}}</p>
                </div>
                <div class="linkscard">
                    <a :href="card.s" target="black">Start</a>
                    <a :href="card.l" target="black">link</a>
                </div>
            </div>
        </div>
    </div>
    `,

    data: function() {

        return {
            cardsjs:[]
        }
        
    },

    methods:{
        llamararJson: function(){
            axios.get('data/cardjs.json').then( response => {
                this.cardsjs = response.data
            })
        }
    },

    mounted: function(){
        this.llamararJson();
    }
  })


new Vue({
    el: '#app'
})
