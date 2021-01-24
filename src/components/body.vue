<template>
<div>
<p>Body</p>
    <ListOne/>
    <ListTwo/>
</div>
    
</template>
<script>
import listOne from './listComp/listOne'
import listTwo from './listComp/listTwo'
export default {
    components:{
        ListOne: listOne,
        ListTwo: listTwo
    },
    name:"body"
}
</script>
<style scoped>
p{
    color: pink;
}
</style>