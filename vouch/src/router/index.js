import Vue from "vue";
import Router from "vue-router";
import ChatRoom from "@/components/ChatRoom";
import bukanchatroom from "@/components/bukanchatroom";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "ChatRoom",
      component: ChatRoom
    },
    {
      path: "/enter",
      name: "bukanchatroom",
      component: bukanchatroom
    }
  ]
});
