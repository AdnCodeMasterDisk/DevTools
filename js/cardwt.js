Vue.component('card-wt', {
    template:
    `
    <div class="cajacartas">

        <div class="cart cont wrap" v-for=" card in cardswt" >
            <div class="contcart">
                <p class="titulocart">{{card.t}}</p>
                <div class="descripcionbox">
                    <p class="des">{{card.d}}</p>
                </div>
                <div class="linkscard onlink">
                    <a :href="card.l" target="black">link</a>
                </div>
            </div>
        </div>
    </div>
    `,

    data: function() {

        return {
            cardswt:[]
        }
        
    },

    methods:{
        llamararJson: function(){
            axios.get('data/cardwt.json').then( response => {
                this.cardswt = response.data
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
