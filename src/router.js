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
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/pizza",
      name: "pizza",
      component: () =>
        import(/* webpackChunkName: "pizza" */ "./views/Pizza.vue")
    },
  ]
});
