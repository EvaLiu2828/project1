<template>
    <div class="temp-404">
        <Header :headerData="headerData" />
        404
    </div>
</template>
<script>
import Header from '../public/header'

export default {
    class: "Temp404",
    components: {
        Header,
    },
    data() {
		return {
			headerData: {
				title: "404",
				// leftBtn: true,
				// leftIconType: 'van-icon',
				// leftIconName: 'arrow-left',
			}
		}
	},

}
</script>
<style lang="scss" scoped>
.temp-404 {
    width: 100%;
	height: 100%;
    overflow: hidden;
    text-align: center;
}
</style>