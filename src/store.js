import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cakes: [],
    orderId: 0,
    totalPriceForCakes: 0
  },
  mutations: {
    addCake(state, ...params) {
      state.cakes.push({
        cakeAmount: params[0].cakeAmount,
        cakeName: params[0].cakeName,
        totalPrice: params[0].totalPrice,
        orderId: state.orderId
      })
      state.orderId++;
      state.totalPriceForCakes += params[0].totalPrice;
    },
    removeCake(state, index){
      state.totalPriceForCakes -= state.cakes[index].totalPrice;
      state.cakes.splice(index,1);
    },
  },
  actions: {},
  getters: {
    getOrderedCakes(state){
      return state.cakes;
    },
    getTotalPriceForCakes(state) {
      return state.totalPriceForCakes;
    }
  }
});