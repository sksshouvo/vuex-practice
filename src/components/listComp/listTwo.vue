<template>
    <div class="listTwo">
        <div>
            <p>Buy Product List</p>
        </div>
        <div class="insideList">
        <ul>
            <li v-for="product in buyProducts" :key="product.Name">
                <span class="name"> {{product.Name}} </span>
                <br>
                <span class="price"> {{product.Price}} </span>
            </li>
        </ul>
        </div>
        <div>
            <button v-on:click="reducePrice(4)">Reduce Price</button>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    computed:{
        products(){
            return this.$store.state.products
        },
        ...mapGetters([
            'buyProducts'
        ])
    },
    methods:{
        ...mapActions([
            'reducePrice',
            'increasePrice'
        ])
    }
}
</script>

<style scoped>
.listTwo{
    display: flex;
    flex-wrap: wrap;
    background-color: black;
}
.listTwo > div{
    flex-direction: row;
    width: 100%;
    align-items: center;
}
.listTwo > div >p{
    color: white;
    padding: 1%;
}

ul {
    list-style: none;
}
li{
    text-align: center;
    border: 1px solid black;
    width: 200px;
    padding: 1%;
    margin: 1%;
    background-color: blue;
    color: white;
    float: left;
}
button{
color: #494949 !important;
text-transform: uppercase;
text-decoration: none;
background: #ffffff;
padding: 20px;
border: 4px solid #494949 !important;
display: inline-block;
transition: all 0.4s ease 0s;
}
button:hover {
color: #ffffff !important;
background: #f6b93b;
border-color: #f6b93b !important;
transition: all 0.4s ease 0s;
}
</style>