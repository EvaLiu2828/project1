import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

/** frame */
import frameRouter from './module/frame-router'
let redirectRouter = '/frame';
let routers = [];

/**默认路由 */
let defaultRouter = {
    path: "*",
    redirect: redirectRouter
}

//合并页面路由
routers = routers.concat(
    defaultRouter,
    frameRouter,
);

let router = new Router({
    routes: routers,
});

export default router;