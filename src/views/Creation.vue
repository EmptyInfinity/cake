<template>
  <div class="home px-5">
    <HelloWorld msg="Create your cake!"/>
    <div class="d-flex align-items-center">
      <h3>Prices for 1mm. of layer:</h3>
      <table class="table table-striped w-25 mx-auto">
        <tbody>
          <tr>
            <td>cherry</td>
            <td>0.2$</td>
          </tr>
          <tr>
            <td>banana</td>
            <td>0.25$</td>
          </tr>
          <tr>
            <td>chocolate</td>
            <td>0.35$</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <div class="cake-view">
        <div
          v-for="layer in layers"
          :key="layer.id"
          :style="{height: layer.height*3 + 'px', backgroundColor: layer.color}"
        ></div>
      </div>
      <div class="cake-conf">
        <div class="line">
          <p>Chose a layer taste:</p>
          <div class="tastes" @click="handleTaste($event)">
            <button class="active">cherry</button>
            <button>banana</button>
            <button>chocolate</button>
          </div>
        </div>
        <div class="line">
          <p>Chose it`s height:</p>
          <input type="number" v-model.number="layerHeight" min="5" max="55" step="5">
          <span class="mx-1">mm. [5-55mm]</span>
          <span
            class="alert alert-danger mb-0 p-0 px-2"
            v-if="heightUncorrect"
          >Min height - 5mm. Max height - 55mm.</span>
        </div>
        <div class="line">
          <p>Add layer:</p>
          <button @click="addLayer"></button>
        </div>
        <div class="line">
          <p>Remove layer:</p>
          <button @click="removeLayer" class="minus"></button>
        </div>
        <div class="line">
          <p>Create a name for cake</p>
          <input type="text" v-model="cakeName" class="ml-1 mb-1 w-50">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <h3>{{ cakeName }}</h3>
        <h3>Total height: {{ totalHeight }}mm.</h3>
        <span class="alert alert-danger mb-0 p-0 px-2" v-if="maxHeightUncorrect">Max height - 55mm.</span>
      </div>
      <h3>Price for cake: {{ priceForCake }}$</h3>
    </div>
    <h3>
      Add to order
      <input type="number" min="1" v-model.number="cakesAmount" class="input-text">
      {{ cakeName }} cake
      <button @click="addCake" class="btn btn-success btn-lg">
        <img
          src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png"
          width="30px"
          alt
        >
      </button>
    </h3>
    <hr>
    <h3>Total price: {{ totalPrice }}$</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store.js";

export default {
  name: "home",
  store,
  components: {
    HelloWorld
  },
  data: () => ({
    choisenPrice: 0.2,
    heightUncorrect: false,
    maxHeightUncorrect: false,
    cakesAmount: 1,
    color: "#9a0b20",
    id: 0,
    cakeName: "",
    totalHeight: 0,
    layerHeight: 5,
    priceForCake: 0,
    layers: []
  }),
  methods: {
    handleTaste(e) {
      e.target.parentNode.childNodes.forEach(button => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");

      if (e.target.innerHTML === "cherry") {
        this.color = "#9a0b20";
        this.choisenPrice = 0.2;
      } else if (e.target.innerHTML === "banana") {
        this.color = "#ffe135";
        this.choisenPrice = 0.25;
      } else {
        this.color = "#42271c";
        this.choisenPrice = 0.35;
      }
    },
    addLayer() {
      if (this.layerHeight < 5 || this.layerHeight > 55) {
        this.heightUncorrect = true;
        return false;
      } else {
        this.heightUncorrect = false;
      }
      if (this.totalHeight + this.layerHeight > 55) {
        this.maxHeightUncorrect = true;
        return false;
      } else {
        this.maxHeightUncorrect = false;
      }
      this.layers.push({
        price: this.choisenPrice,
        height: this.layerHeight,
        color: this.color,
        id: this.id
      });
      this.totalHeight += this.layerHeight;
      this.priceForCake += this.choisenPrice * this.layerHeight;
      this.id++;
    },
    removeLayer() {
      if (this.id > 0) {
        this.id--;
        this.heightUncorrect = false;
        this.maxHeightUncorrect = false;
        this.totalHeight -= this.layerHeight;
        this.priceForCake -= this.choisenPrice;
        this.layers.splice(-1, 1);
      } else {
        return false;
      }
    },
    addCake() {
      store.commit("addCake", this.layers, this.cakesAmount);
    }
  },
  computed: {
    totalPrice() {
      return this.priceForCake * this.cakesAmount;
    }
  }
};
</script>

<style lang="scss">
.table {
  td {
    padding: 0.5rem;
    border: 1px solid #ccc;
  }
}
.input-text {
  width: 80px;
  padding: 0 5px;
  margin: 0 10px;
}
.cake-view {
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  div {
    width: 100%;
  }
}
.cake-conf {
  width: 600px;
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  .line {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    input[type="number"],
    input[type="text"] {
      width: 60px;
      padding: 0 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    input[type="checkbox"] {
      transform: scale(1.8);
    }
    button {
      min-width: 25px;
      min-height: 25px;
      border: none;
      border-radius: 50%;
      background: url("../assets/plus.png") no-repeat center;
      background-size: contain;
      margin-left: 20px;
      outline: none;
      &.minus {
        background: url("../assets/minus.png") no-repeat center;
        background-size: contain;
      }
    }
    p {
      margin: 0 10px 0 0;
    }
    .tastes {
      display: flex;
      button {
        width: auto;
        padding: 3px 10px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        margin: 0 3px;
        opacity: 0.5;
        transition: all 0.3s ease;
        &.active {
          opacity: 1;
          box-shadow: 0 0 10px #232323;
        }
        &:first-child {
          background: #9a0b20;
          color: #fff;
        }
        &:nth-child(2) {
          background: #ffe135;
        }
        &:nth-child(3) {
          background: #42271c;
          color: #fff;
        }
      }
    }
  }
}
</style>

