import Vue from "vue";
import VueRouter from "vue-router";
import Contact from '../views/Contact.vue';
import ContactList from "../views/ContactList.vue";
import Contact from '../views/Contact.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: ContactList,
<<<<<<< HEAD
    children: [
      {      path: "contact/:id",
      name: 'contact',
      component: "Contact"
    }

    ]
=======

  },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: Contact,
    props: true
>>>>>>> e387224d1de799ec32fc62cac94178a757482d61
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
