import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim'
    }
  },
//  값 변경할 방법 정의
  mutations:{
    이름변경(state){
        state.name = 'park'
    }
  },
})

export default store