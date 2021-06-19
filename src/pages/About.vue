<template>
    <hr>
    <h1>Conditional</h1>
    <h3>{{ bilangan }}</h3>
    <h4 v-if="ganjil">Ganjil</h4>
    <h4 v-if="genap">Genap</h4>
    <button v-on:click="randomNumber">Generate</button>
</template>

<script>
export default ({
    data() {
        return{
            bilangan : 1,
            ganjil : false,
            genap : false,
        }
    },
    mounted(){
        this.randomNumber();
    },
    methods: {
        randomNumber(){
            this.bilangan = Math.floor(Math.random()*100);
            this.showHide();
        },
        showHide(){
            if(this.bilangan%2==0){
                this.genap = true;
                this.ganjil = false;
            } else {
                this.genap = false;
                this.ganjil = true;
            }
        }
    }
})
</script>
