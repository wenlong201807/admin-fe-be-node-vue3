import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import storage from './../utils/storage';
import API from './../api';
import utils from '../utils/utils';

const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '全栈后台系统',
        },
        component: () => import('@/views/Welcome.vue'),
      },
      {
        name: 'system/user',
        path: '/system/user',
        meta: {
          title: '用户管理',
        },
        component: () => import('../views/dynamic/User.vue'),
      },
      {
        name: 'system/menu',
        path: '/system/menu',
        meta: {
          title: '菜单管理',
        },
        component: () => import('../views/dynamic/Menu.vue'),
      },
      {
        name: 'system/role',
        path: '/system/role',
        meta: {
          title: '角色管理',
        },
        component: () => import('../views/dynamic/Role.vue'),
      },
      {
        name: 'system/dept',
        path: '/system/dept',
        meta: {
          title: '部门管理',
        },
        component: () => import('../views/dynamic/Dept.vue'),
      },
      {
        name: 'audit/leave',
        path: '/audit/leave',
        meta: {
          title: '休假审批',
        },
        component: () => import('../views/dynamic/Leave.vue'),
      },
      {
        name: 'audit/approve',
        path: '/audit/approve',
        meta: {
          title: '待我审批',
        },
        component: () => import('../views/dynamic/Approve.vue'),
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '页面不存在',
    },
    component: () => import('@/views/404.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

async function loadAsyncRoutes() {
  let userInfo = storage.getItem('userInfo') || {};
  if (userInfo.token) {
    try {
      const { menuList } = await API.getPermissionList();
      let routes = utils.generateRoute(menuList);
      // TODO 动态菜单有问题
      // const modules = import.meta.glob('../views/dynamic/*.vue');
      // // const modules = { "../views/404.vue": () => import("/src/views/404.vue"),
      // console.log('modules动态菜单:', modules);
      // console.log('动态菜单:', routes);

      // routes.map((route) => {
      //   let url = `../views/dynamic/${route.component}.vue`;
      //   console.log('modules[url]动态菜单:', modules[url]);
      //   route.component = modules[url];
      //   router.addRoute('home', route);
      // });

      // 导航守卫
      router.beforeEach((to, from, next) => {
        if (router.hasRoute(to.name)) {
          document.title = to.meta.title;
          next();
        } else {
          next('/404');
        }
      });
    } catch (error) {}
  }
}
loadAsyncRoutes();
// 判断当前地址是否可以访问
/*
function checkPermission(path) {
    let hasPermission = router.getRoutes().filter(route => route.path == path).length;
    if (hasPermission) {
        return true;
    } else {
        return false;
    }
}
*/

export default router;
