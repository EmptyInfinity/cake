<template>
  <div class="about">
    <h1>This is an about page {{ storeCounterPlusLocalCounter }}</h1>
    <h3>Ampunt of cakes:</h3>
    <h3>Increase amount of cakes <button @click="addCake">+1</button></h3>
  </div>
</template>

<script>
import store from "@/store.js";
import { mapState } from "vuex";

export default {
  name: "about",
  store,
  data: () => ({
    count: 2
  }),
  computed: mapState({
    // count: state => state.count,
    // storeCount: 'count',
    storeCounterPlusLocalCounter (state){
      return this.count + state.count;
    }
  }),
  methods: {
    addCake(){
      store.commit('addCake');
    }
  }
};
</script>

