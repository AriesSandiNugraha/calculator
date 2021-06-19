<template>
    <hr>
    <h1>Loops</h1>

    <table border=1>
        <tr v-for="hari in namaHari" v-bind:key="hari">
            <td>{{ hari }}</td>
        </tr>
    </table>
</template>

<script>
export default{
    data(){
        return{
            namaHari : ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
        }
    }
}
</script>

<style scoped>
table{
    width:100px;
}
td{
    padding:10px;
}
</style>