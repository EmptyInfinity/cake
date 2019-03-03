import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cakesAmount: 0
  },
  mutations: {
    addCake (state, layers){
      state.cakesAmount++;
      console.log(layers);
    }
  },
  actions: {}
});