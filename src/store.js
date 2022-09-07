import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      likes: 30,
      좋아요눌렀니: false,
      more: {},
    };
  },
  //  값 변경할 방법 정의
  mutations: {
    이름변경(state) {
      state.name = "park";
    },
    좋아요(state) {
      if (state.좋아요눌렀니 == false) {
        state.likes++;
        state.좋아요눌렀니 = true;
      } else {
        state.likes--;
        state.좋아요눌렀니 = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        a.data;
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
