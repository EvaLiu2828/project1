<template>
    <div class="test" ref="test">
        <Header :headerData="headerData" ref="header" />
        <div class="main test-cont"  :style="{height: mainHeight}">
            <van-pull-refresh class="list" v-model="refreshing" @refresh="onRefresh">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad">
                        <div class="list-content">
                            <van-row class="list-item" gutter="20" 
                                v-for="item in list" 
                                :key="item">
                                <van-col span="8" class="list-left">
                                    <div class="list-img">
                                        <van-icon color="#ccc" name="photo" />
                                    </div>
                                </van-col>
                                <van-col span="16" class="list-right">
                                    <h6>标题{{item}}</h6>
                                </van-col>
                            </van-row>
                        </div>
                    </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>
<script>
import Header from '../public/header'
import { PullRefresh, List, Icon, Col, Row  } from 'vant';
export default {
    class: "TestTemp",
    components: {
        Header,
        [PullRefresh.name]: PullRefresh,
        [List.name]: List,
        [Col.name]: Col,
        [Row.name]: Row,
        [Icon.name]: Icon,
    },
    data() {
		return {
            /* 页面初始化设置 */
			mainHeight: '100%', //主体部分高度
			headerData: {
				title: "test",
            },
            /* 页面变量定义 */
            list: [],
            loading: false,
            finished: false,
            refreshing: false
		}
	},
	mounted(){
		//初始化页面高度
        this.initPageSetup();
	},
	methods: {
		//初始化页面高度
		initPageSetup(){
			this.mainHeight = (window.screen.availHeight - this.$refs.header.$el.offsetHeight- this.$parent.$refs.tabNav.$el.offsetHeight) + 'px';// - this.$parent.$refs.tabNav.$el.offsetHeight
        },
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                this.list = [];
                this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        }
    }
}
</script>
<style lang="scss" scoped>
.test {
    width: 100%;
	height: 100%;
	overflow: hidden;
    .test-cont {
        .list {
            height: 100%;
            overflow: inherit;
            .list-content {
                padding: 10px 20px;
                .list-item {
                    height: 80px;
                    padding: 10px 0;
                    border-bottom: 1px solid #dcdcdc;
                    .list-left {
                        height: inherit;
                        line-height: 80px;
                        border: 1px solid #dcdcdc;
                        background: #fff;
                        .list-img {
                            text-align: center;
                        }
                    }
                    .list-right {
                        text-align: left;
                        font-size: 24px;
                        line-height: 30px;
                    }

                }
            }
        }
    }
}
</style>