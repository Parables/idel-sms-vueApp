import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import AttendancePage from "../views/AttendancePage.vue";
import BooksPage from "../views/BooksPage.vue";
import ProgrammesPage from "../views/ProgrammesPage.vue";
import StaffPage from "../views/StaffPage.vue";
import StudentsPage from "../views/StudentsPage.vue";
import TimetablePage from "../views/TimetablePage.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/programmes",
    name: "programmes",
    component: ProgrammesPage
  },
  {
    path: "/books",
    name: "books",
    component: BooksPage
  },
  {
    path: "/staff",
    name: "staff",
    component: StaffPage
  },
  {
    path: "/students",
    name: "students",
    component: StudentsPage
  },
  {
    path: "/timetable",
    name: "timetable",
    component: TimetablePage
  },
  {
    path: "/attendance",
    name: "attendance",
    component: AttendancePage
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
