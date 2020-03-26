import Frame from '../../components/frame/Frame.vue'
/* Router Modules */
import demoRouter from './demo/demo-router.js'
import HelloWorld from '@/components/demo/HelloWorld.vue'
import TestTemp from '@/components/demo/Test.vue'
import Mine from '@/components/mine/Mine.vue'
import Temp404 from '@/components/public/404.vue'

let redirectRouter = '/frame/demo'

console.log(demoRouter)
const frameRouter = {
    path: '/frame',
    name: 'Frame',
    component: Frame,
    redirect: redirectRouter,
    children: [
        {
            path: 'demo',
            name: 'Demo',
            component: HelloWorld
        },
        {
            path: 'test',
            name: 'Test',
            component: TestTemp
        },
        {
            path: 'mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: 'temp404',
            name: 'Temp404',
            component: Temp404
        }
    ]
}

export default frameRouter;