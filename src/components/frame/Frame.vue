<template>
    <div class="frame" ref="frame">
        <!-- 路由页面 -->
        <div class="router-view" :style="{height: mainHeight}">
            <router-view />
        </div>
        <!-- tabbar 组件 -->
        <van-tabbar v-model="activeIndex" class="footer" ref="tabNav"
           :class="{
                android: android,
                ios: ios,
                iphoneX: iphoneX
            }" >
            <van-tabbar-item 
                v-for="item in tabBar" 
                :key="item.id"
                :icon="item.icon" 
                :name="item.key"
                :badge="item.badge ? item.badge : ''"
                @click="routerJump(item)">{{item.title}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { NavBar, Tabbar, TabbarItem } from 'vant';
import { getUserAgent } from '../../base/ruixin'
import { devicePlatform, deviceModal } from '../../base/device'
import Header from '../public/header'
import { submodule } from '../../moudule/submodule'
export default {
    class: "FrameTep",
    components: {
        [Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem,
    },
    data(){
        return {
            /* 页面初始化设置 */
            mainHeight: '100%',//页面高度
            // 设备标识。设置对应设备样式
            android: true,
            ios: true,
            iphoneX: true,
            /* 页面参数 */
            tabBar: [//tabbar
                {id: 0, key: 'Demo', icon: 'home-o', url: 'Demo', title: '首页'},
                {id: 1, key: 'Test', icon: 'search', url: 'Test', title: '测试1', badge: '5' },
                {id: 2, key: 'Temp404', icon: 'friends-o', url: 'Temp404', title: '测试2'},
                {id: 3, key: 'Mine', icon: 'setting-o', url: 'Mine', title: '我的'},
            ],
            activeIndex: 'Demo',//tabbar初始化显示
        }
    },
    mounted(){
        //判断设备. 区别处理android和ios（普通iOS和iphoneX）的height值
        this.initDeviceSetup();
        //
        this.getActiveIndex();

        submodule();
    },
    methods: {
        //判断设备. 区别处理android和ios（普通iOS和iphoneX）的height值
        initDeviceSetup(){
            this.android = devicePlatform() === 'android' ? devicePlatform() : false;
            this.ios = devicePlatform() === 'ios' &&  !deviceModal() ? devicePlatform() : false;
            this.iphoneX = deviceModal() ? deviceModal() : false;
        },
        //tabbar 页面跳转
        routerJump(item){
            if(item.key !== this.$route.query.activeIndex){
                this.$router.push({ 
                    name: item.url, 
                    query: { activeIndex: item.key } 
                });
            }
            this.getActiveIndex();
        },
        //设置选中标签的索引值
        getActiveIndex() {
            if (this.$route.query.activeIndex) {
                this.activeIndex = this.$route.query.activeIndex;
            }
             else {
                this.activeIndex = 'Demo';
                this.$router.push({ 
                    query: { activeIndex: 'Demo' } 
                });
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.frame {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .router-view {
        width: 100%;
    }
}
</style>