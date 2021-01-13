import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MainPage from "@/components/MainPage";
import LoginPage from "@/views/login/index";
import TaskPage from "@/views/main/index";
import HomePage from "@/views/home/index";
import HomeDetail from "@/views/home/detail/index";
import FishGuide from "@/views/fish/guide/index";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/task",
    name: "TaskPage",
    component: TaskPage
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage
  }
  ,
  {
    path: "/homedetail",
    name: "HomeDetail",
    component: HomeDetail
  }
  ,
  {
    path: "/FishGuide",
    name: "FishGuide",
    component: FishGuide
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
