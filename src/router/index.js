import Vue from "vue";
import VueRouter from "vue-router";
import Contact from '../views/Contact.vue';
import ContactList from "../views/ContactList.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: ContactList,

  },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: Contact,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
