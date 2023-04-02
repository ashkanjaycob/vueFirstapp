import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "./Pages/HomeComp.vue";
import UserIndex from "./Pages/Users/UsersIndex.vue";
import UserShow from "./Pages/Users/UserShow.vue";
import TemplateUser from "./Pages/Users/TemplateUser.vue";
import TemplatePost from "./Pages/Posts/TemplatePost.vue";
import PostIndex from "./Pages/Posts/PostIndex.vue";
import PostShow from "./Pages/Posts/PostShow.vue";
import CreatePost from "./Pages/Posts/CreatePost.vue";

const routes = [
  { path: "/", component: HomeComp },
  {
    path: "/users",
    name: "users",
    component: TemplateUser,
    children: [
      { path: "", name: "users", component: UserIndex },
      { path: ":id", name: "userId", component: UserShow },
    ],
  },
  {
    path: "/posts",
    name: "posts",
    component: TemplatePost,
    children: [
      { path: "", name: "posts", component: PostIndex },
      { path: ":id", name: "PostShow", component: PostShow },
      { path: "create", name: "CreatePost", component: CreatePost  },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
