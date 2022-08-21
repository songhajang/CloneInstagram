<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="step=0">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li @click="step++" v-if="step==1">Next</li>
        <li @click="publish" v-if="step==2">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <h4>안녕 {{$store.state.name}}</h4>
    <button @click="$store.commit('이름변경')">이름바꾸기</button>
    

    <Container :dataList="data" :step="step" :fileImg="imgs" :filterName="imgFilter" @write="comment = $event"/>
    <button @click="more" v-if="step == 0">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
 
  </div>
</template>

<script>
import Container from './components/SectionContainer.vue';
import datas from './CloneData.js'
import axios from 'axios'
axios.post()

export default {
  name: 'App',
  components: {
    Container,
  },
  data(){
    return{
      step : 0,
      data : datas,
      val : 0,
      imgs : '',
      comment : '',
      imgFilter : '',
    }
  },
  mounted(){
    this.emitter.on('filterName', (e)=>{
      this.imgFilter = e
    });
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.val}.json`)
      .then( res =>{
        this.data.push(res.data)
        this.val  = 1
      })
    },
    upload(e){
      let file = e.target.files
      this.step ++
      let url = URL.createObjectURL(file[0])
      this.imgs = url
      console.log( this.imgs)
      
    },
    publish(){
      let bord = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgs,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.comment,
        filter: this.imgFilter
      }
      this.data.unshift(bord)
      this.step = 0
      this.imgFilter = ''
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}
</style>
