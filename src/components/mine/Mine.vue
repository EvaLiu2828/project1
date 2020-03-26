<template>
    <div class="mine" ref="mine">
        <Header :headerData="headerData" ref="header" />
        <div class="main mine-content" :style="{height: mainHeight}">
            <van-notice-bar text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容" left-icon="volume-o" />
            <div class="mine-list">
                <van-cell-group>
                    <van-cell title="消息" is-link />
                    <van-cell title="设置" is-link />
                    <van-cell title="人脸识别" is-link />
                </van-cell-group>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../public/header'
import { NoticeBar, Cell, CellGroup } from 'vant';

export default {
    class: "Mine",
    components: {
        Header,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [NoticeBar.name]: NoticeBar,
    },
    data() {
		return {
            /* 页面初始化设置 */
            mainHeight: '100%', //主体部分高度
            headerData: {
				title: "我的",
            },

        }
    },
	mounted(){
		//初始化页面高度
        this.initPageSetup();
	},
	methods: {
		//初始化页面高度
		initPageSetup(){
            this.mainHeight = (window.screen.availHeight - this.$refs.header.$el.offsetHeight- this.$parent.$refs.tabNav.$el.offsetHeight) + 'px'; //
        },
    }

}
</script>
<style lang="scss" scoped>
.mine {
    width: 100%;
	height: 100%;
    overflow: hidden;
	.mine-content {
        .mine-list {
            padding: 10px 0;
        }
    }
}
</style>