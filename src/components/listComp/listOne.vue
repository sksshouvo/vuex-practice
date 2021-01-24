<template>
    <div class="listOne">
        <div>
            <p>Sale Product List</p>
        </div>
        
        <div>
            <ul>
            <li v-for="product in saleProducts" :key="product.Name">
                <span class="name">{{product.Name}}</span>
                <br>
                <span class="price">{{product.Price}}</span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        products(){
            return this.$store.state.products
        },
        ...mapGetters([
            'saleProducts'
        ])
    }
}
</script>

<style scoped>
.listOne{
    display: flex;
    flex-wrap: wrap;
    background-color: bisque;
}
.listOne > div{
    flex-direction: row;
    width: 100%;
    align-items: center;
}
.listOne > div >p{
    
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
    background-color:  chocolate;
    color: white;
    float: left;
}
</style>