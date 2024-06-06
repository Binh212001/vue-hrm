import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    //Employee
    {
      path: "/employee",
      name: "employee",
      component: () => import("../views/employee/index.vue"),
    },
    {
      path: "/employee/add",
      name: "add-employee",
      component: () => import("../views/employee/add.vue"),
    },
    {
      path: "/employee/employeeID/:id",
      name: "employee-infomation",
      component: () => import("../views/employee/infomation.vue"),
    },

    {
      path: "/leave",
      name: "leave",
      component: () => import("../views/leave/index.vue"),
    },
    {
      path: "/leave/add",
      name: "new-leave",
      component: () => import("../views/leave/addleave.vue"),
    },

    {
      path: "/overtime",
      name: "overtime",
      component: () => import("../views/overtime/index.vue"),
    },
    {
      path: "/overtime/add",
      name: "new-overtime",
      component: () => import("../views/overtime/add.vue"),
    },
    //shift
    {
      path: "/shift",
      name: "shift",
      component: () => import("../views/workshift/index.vue"),
    },
    {
      path: "/shift/shiftID/:id",
      name: "shift-infomation",
      component: () => import("../views/workshift/shiftinfomation.vue"),
    },
  ],
});

export default router;
