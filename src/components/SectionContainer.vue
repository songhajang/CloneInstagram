<template>
    <div>
        <Post :data="lst" v-for="(lst,key) in dataList" :key="key" />


    </div>
</template>

<script>
import Post from './ArticlePost.vue'
export default {
    components:{
        Post,
    },
    props:{
        dataList : Array,
    }
}
</script>

<style>
</style>