<template>
    <div>
        <div v-if="step == 0">
            <Post :data="lst" v-for="(lst, key) in dataList" :key="key" />

        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div class="upload-image" :style="`background-image : url(${fileImg})`"></div>
            <div class="filters">
                <FilterBox v-for="lst in fillter" :key="lst" :filterImg="fileImg" :filter="lst" >
                    {{lst}}
                </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :style="`background-image : url(${fileImg})`"></div>
            <div class="write">
                <textarea class="write-box" placeholder="write!" @input="$emit('write', $event.target.value)" ></textarea>
            </div>
        </div>

    </div>
</template>

<script>
import Post from './ArticlePost.vue'
import FilterBox from './ArticleFilterBox.vue'
export default {
    data(){
        return{
            fillter : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
    components: {
        Post,
        FilterBox,
    },
    props: {
        dataList: Array,
        step: Number,
        fileImg: String,
    }
}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background-size: cover;
    background-position: center;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>