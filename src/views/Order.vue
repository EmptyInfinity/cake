<template>
  <div class="about">
    <h2>Your cakes:</h2>
    <ul v-for="(order, index) in getOrderedCakes" :key="order.orderId">
      <li>
        Name: <span>{{order.orderId}}</span>
        <div>{{ order.cakeName }}</div>
        <span class="delete" @click="removeCake(index)">x</span>
      </li>
      <li>
        It`s amount:
        <span>{{ order.cakeAmount }}</span>
      </li>
      <li>
        Price for it
        <span>{{ order.totalPrice }}$</span>
      </li>
    </ul>
    <hr>
    <h2>Total price for cakes: {{ getTotalPriceForCakes }}$</h2>
  </div>
</template>

<script>
import store from "@/store.js";
import { mapState } from "vuex";

export default {
  name: "about",
  store,
  data: () => ({
  }),
  computed: mapState({
    getOrderedCakes() {
      return this.$store.state.cakes;
    },
    getTotalPriceForCakes(){
      return this.$store.state.totalPriceForCakes;
    }
  }),
  methods: {
    removeCake(index) {
      store.commit("removeCake",index);
    }
  }
};
</script>

<style lang="scss">
.about {
  max-width: 500px;
  margin: auto;
  counter-reset: num;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      text-align: left;
      font-size: 20px;
      padding-bottom: 5px;
      position: relative;
      span, div {
        background: #42b983;
        padding: 5px 10px;
        border-radius: 20px;
        display: inline-block;
      }
      .delete {
        position: absolute;
        top: 5px;
        right: -50px;
        background: tomato;
        padding: 2px 12px;
        border-radius: 50%;
        cursor: pointer;
      }
      &:first-child::before {
        counter-increment: num;
        content: counter(num) ".";
      }
      &:not(:first-child) {
        padding-left: 22px;
      }
      button {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>

