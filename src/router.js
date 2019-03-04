import Vue from "vue";
import Router from "vue-router";
import Creation from "./views/Creation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "creation",
      component: Creation
    },
    {
      path: "/order",
      name: "order",
      component: () =>
        import(/* webpackChunkName: "order" */ "./views/Order.vue")
    },
    {
      path: "/pizza",
      name: "pizza",
      component: () =>
        import(/* webpackChunkName: "pizza" */ "./views/Pizza.vue")
    },
  ]
});
