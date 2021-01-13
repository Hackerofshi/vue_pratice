import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MainPage from "@/components/MainPage";
import LoginPage from "@/views/login/index";
import TaskPage from "@/views/main/index";
import HomePage from "@/views/home/index";
import HomeDetail from "@/views/home/detail/index";
import Guide from "@/views/fish/guide/index";
import FishLogin from "@/views/fish/login/index";
import FishHomePage from "@/views/fish/home/index";
import FishPond from "@/views/fish/home/FishPond";
import FishGuide from "@/views/fish/home/FishGuide";
import FishMessage from "@/views/fish/home/FishMessage";
import Mine from "@/views/fish/home/Mine";
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
  },
  {
    path: "/homedetail",
    name: "HomeDetail",
    component: HomeDetail
  },
  {
    path: "/Guide",
    name: "Guide",
    component: Guide
  },
  {
    path: "/FishLogin",
    name: "FishLogin",
    component: FishLogin
  },
  {
    path: "/FishHomePage",
    name: "FishHomePage",
    component: FishHomePage,
    children: [
      {
        path: "", //首页是默认子路由，所谓为空
        name: "FishPond",
        component: FishPond
      },
      {
        path: "/FishGuide", //首页是默认子路由，所谓为空
        name: "FishGuide",
        component: FishGuide
      },
      {
        path: "/FishMessage",
        name: "FishMessage",
        component: FishMessage
      },
      {
        path: "/Mine",
        name: "Mine",
        component: Mine
      }
    ]
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
