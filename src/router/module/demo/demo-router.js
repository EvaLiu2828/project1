import HelloWorld from '../../../components/demo/HelloWorld.vue'
import TestTemp from '../../../components/demo/Test.vue'

const demoRouter = [
    {
        path: '/demo',
        name: 'Demo',
        component: HelloWorld
    },
    {
        path: '/test',
        name: 'Test',
        component: TestTemp
    }
]

export default demoRouter;