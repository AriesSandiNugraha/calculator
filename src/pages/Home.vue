<template>
    <hr>
    <h1>Home page Aries</h1>
    <h3>Project Vue Pertama Saya</h3>
    <h4>Nama Saya {{ nama }}</h4>
    <h4>Umur Saya {{ tahunlahir }}</h4>
    <input v-model="kotalahir" />
    <h5>Kota Lahir Saya : {{ kotalahir }}</h5>
    <button v-on:click="next">Next</button>
</template>

<script>

export default ({
    data() {
        return{
            nama : "Aries Sandi Nugraha",
            tahunlahir :2000,
            kotalahir: "Bandung",
        }
    },
    methods:{
        next(){
            this.tahunlahir +=1;
        }
    },
    mounted(){
        this.tahunlahir = 2021 - this.tahunlahir;
    }
})
</script>
