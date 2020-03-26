<template>
	<div class="hello" ref="hello">
		<!-- header -->
		<Header ref="header" :headerData="headerData" />
		<!-- 页面主体 -->
		<div class="main demo-content" :style="{height: mainHeight}">
			<van-divider class="divider" content-position="left">icon</van-divider>
			<i class="iconfont icon-qiandaocopy"></i>
			<i class="iconfont icon-yuanchengluyincopy"></i>
			<i class="iconfont icon-saomiaohetongjiancopy"></i>
			<i class="iconfont icon-paichengcopy"></i>
			<i class="iconfont icon-qiandaocopy1"></i>
			<van-divider class="divider" content-position="left">瑞信功能调用</van-divider>
			<van-row class="content">
				<van-col span="8">系统类型：</van-col>
				<van-col span="16">{{userAgent}}</van-col>
			</van-row>
			<van-row class="content">
				<van-col span="8">token:</van-col>
				<van-col span="16">{{ token }}</van-col>
			</van-row>
			<van-button type="primary" size="small" block @click="getUserInfo">获取tonken</van-button>
			<van-row class="content">
				<van-col span="8">初始化js框架：</van-col>
				<van-col span="16"></van-col>
			</van-row>
			<van-button type="primary" size="small" block @click="getConfig">初始化js框架</van-button>
			<van-divider class="divider" content-position="left">访问手机相册</van-divider>
			<div class="upload">
				<van-uploader v-model="fileList" multiple />
				<van-button type="primary" size="small" block @click="getFiles">file资源查看</van-button>
				<div class="files-cont" v-for="item in fileList" :key="item.content">
					<van-row class="content">
						<van-col span="8">图片名称</van-col>
						<van-col span="16">{{item.file.name}}</van-col>
					</van-row>
					<van-row class="content">
						<van-col span="8">图片大小</van-col>
						<van-col span="16">{{item.file.size}}</van-col>
					</van-row>
					<van-row class="content">
						<van-col span="8">图片</van-col>
						<van-col class="file-url van-ellipsis" span="16">{{item.content}}</van-col>
					</van-row>
					<van-divider :style="{ borderColor: '#ccc', padding: '0 16px' }"></van-divider>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Button, Cell, CellGroup, Divider, Col, Row, Form, Icon, Uploader } from 'vant';
import {getRxConfig, getUserAgent, getRxUserInfo} from '../../base/ruixin'//瑞信JS-API封装
import Header from '../public/header'
export default {
	name: 'HelloWorld',
	data() {
		return {
			/* 页面初始化设置 */
			mainHeight: '100%', //主体部分高度
			headerData: { //header组件初始化配置
				title: "demo", //页面名称
				leftBtn: false, //左侧操作按钮是否显示  显示：true；不是显示： false
				leftIconType: 'custom-icon', //左侧操作按钮图标类型  van-icon：框架图标；custon-icon：项目自定义图标
				leftIconName: 'qiandaocopy1', //左侧操作按钮字体图标名称
				rightBtn: true,//右侧操作按钮是否显示  显示：true；不是显示： false
				rightIconType: 'van-icon',//右侧操作按钮图标类型  van-icon：框架图标；custon-icon：项目自定义图标
				rightIconName: 'replay',//右侧操作按钮字体图标名称
				rightFun: this.rightBtnFun//右侧操作事件
			},
			/* 页面参数命名 */
			userAgent: '',
			token: '',
			fileList: []
		}
	},
	components: {
		Header,
		[Button.name]: Button,
		[Divider.name]: Divider,
		[Col.name]: Col,
		[Row.name]: Row,
		[Icon.name]: Icon,
		[Uploader.name]: Uploader,		
	},
	mounted(){
		//初始化页面高度
        this.initPageSetup();
		// this.userAgent = getUserAgent();
	},
	methods: {
		//初始化页面高度
		initPageSetup(){
			this.mainHeight = (window.screen.availHeight - this.$refs.header.$el.offsetHeight- this.$parent.$refs.tabNav.$el.offsetHeight) + 'px';//
		},
		//导航栏右侧按钮事件
		rightBtnFun(){
			window.location.reload();
		},
		//初始化js框架
		getConfig(){
			getRxConfig(this.configRes);
		},
		configRes(msg){
			alert('diaoyon----3'+JSON.stringify(msg))
		},
		//获取tonken
		getUserInfo(){
			getRxUserInfo(this.success, this.fail);
		},
		success(msg){
			this.token = msg.token;
		},
		fail(msg){
			alert('获取tonken失败', msg)
		},
		getFiles(){
			console.log(this.fileList)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.demo-content {
		padding: 0 20px;
		font-size: 24px;
		.divider {
			font-size: 25px;
		}
		.iconfont {
			padding: 10px;
		}
		.icon-qiandaocopy {
			font-size: 25px;
		}
		.content {
			font-size: 18px;
			padding: 15px 0;
		}
		.upload {
			width: 100%;
			text-align: center;
			.files-cont {
				width: 95%;
				margin: 0 auto;
			}
		}
	}
}
</style>
