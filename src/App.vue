<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { rxhideWebViewTitle } from './base/ruixin'

export default {
	name: 'App',
	mounted(){
		// 路由初始化
		// this.$router.push({ 
		// 	// name: 'Demo', 
		// 	query: { activeIndex: 'Demo' } 
		// });
		this.initApp();
	},
	methods:{
		initApp(){
			rxhideWebViewTitle(this.rxhideWebViewTitle);
		},
		getHideWebView(msg){
			
		}
	}
}
</script>

<style lang="scss">
@import "./css/index.scss";
#app {
	width: 100%;
	height: 100%;
	font-family: "STHeiti", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: #2c3e50;
	img {
		width: 100%;
	}
}
</style>
