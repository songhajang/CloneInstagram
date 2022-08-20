<template>
  <div :class="filter +' filter-item'" :style="`background-image : url(${filterImg})`">
    <slot>
    </slot>
    <button @click="fire">버튼</button>
  </div> 
</template>

<script>
export default {
    props:{
        filterImg : String,
        filter : String,
    },
    methods:{
        fire(){
            this.emitter.emit('filterName', this.filter)
        }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>