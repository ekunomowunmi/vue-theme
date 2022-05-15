import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/pages/logistics",
        name: "logistics",
        component: () => import("@/views/pages/Logistics.vue"),
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("@/views/pages/Orders.vue"),
        children: [
          {
            path: "order-listing",
            name: "order-listing",
            component: () => import("@/views/pages/Orders.vue"),
          },
          {
            path: "order-details",
            name: "order-details",
            component: () => import("@/views/pages/Orders.vue"),
          },
          {
            path: "new-order",
            name: "new-order",
            component: () => import("@/views/pages/Logistics.vue"),
          },
        ]
      },
      {
        path: "/pages/about-us",
        name: "about-us",
        component: () => import("@/views/pages/AboutUs.vue"),
      },
      {
        path: "/pages/invoice",
        name: "invoice",
        component: () => import("@/views/pages/Invoice.vue"),
      },
      {
        path: "/pages/faq",
        name: "faq",
        component: () => import("@/views/pages/FAQ.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/components/page-layouts/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
