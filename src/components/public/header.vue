/**
* 功能模块: header
* Created by v-yuxinliu on 20/03/20
*/
<template>
    <div class="header"
        :class="{ //设置设备系统类名
            android: android,
            ios: ios,
            iphoneX: iphoneX
        }">
        <!-- 参数说明：
        title：导航名字
        leftBtn： 左侧是否显示
        leftIconType: icon类型  van-icon: 框架字体； custom-icon: 自定义字体图标
        leftIconName: 左侧icon的name
        leftText： 左侧文案
        rightBtn： 右侧是否显示
        rightIconName: 右侧icon的name
        rightText： 右侧文案
         -->
        <van-nav-bar fixed
            :title="headerData.title ? headerData.title : ''" 
            :left-text="headerData.leftText ? headerData.leftText : ''">
            <!-- 左侧 -->
            <van-icon  class="nav-btn left-btn" 
                v-show="headerData.leftBtn ? headerData.leftBtn : ''"
                :class-prefix="headerData.leftIconType ? headerData.leftIconType : ''"
                :name="headerData.leftIconName ? headerData.leftIconName : ''"
                slot="left" />
            <!-- 右侧 -->
            <van-icon class="nav-btn right-btn" 
                v-show="headerData.rightBtn ? headerData.rightBtn : ''"
                :class-prefix="headerData.rightIconType ? headerData.rightIconType : ''"
                :name="headerData.rightIconName ? headerData.rightIconName : ''"
                slot="right"
                @click="rightNavFun" />
        </van-nav-bar>
    </div>
</template>
<script>
import { NavBar, Icon } from 'vant';
// import { getUserAgent } from '../../base/ruixin'
import { devicePlatform, deviceModal } from '../../base/device'
export default {
    class: 'Header',
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon,
    },
    props: [
        'headerData'
    ],
    data(){
        return {
            android: true,
            ios: true,
            iphoneX: true
        }
    },
    mounted(){
        //判断设备. 区别处理android和ios（普通iOS和iphoneX）的height值
        this.initDeviceSetup();
    },
    methods: {
        //判断设备. 区别处理android和ios（普通iOS和iphoneX）的height值
        initDeviceSetup(){
            this.android = devicePlatform() === 'android' ? devicePlatform() : false;
            this.ios = devicePlatform() === 'ios' &&  !deviceModal() ? devicePlatform() : false;
            this.iphoneX = deviceModal() ? deviceModal() : false;
        },
        rightNavFun(){
            console.log(this.headerData.rightFun());
            this.headerData.rightFun()
        }
    }

}
</script>
<style lang="scss" scoped>

.header {
    .nav-btn {
        font-size: 22px;
        color: #666;
    }
}
</style>
