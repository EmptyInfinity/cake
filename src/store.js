import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cakesAmount: 0,
    cakes: [],
    orderId: 0
  },
  mutations: {
    addCake(state, ...params) {
      state.cakesAmount++;
      state.cakes.push({
        cakeAmount: params[0].cakeAmount,
        cakeName: params[0].cakeName,
        totalPrice: params[0].totalPrice,
        orderId: state.orderId
      })
    }
  },
  actions: {},
  getters: {
    getOrderedCakes(state){
      return state.cakes;
    }
  }
});