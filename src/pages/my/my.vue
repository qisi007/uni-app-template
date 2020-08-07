<template>
	<view class="my">
		<view class="card"></view>
		<view class="other">
			<view class="other-item">攻略</view>
			<view class="other-item">攻略</view>
			<view class="other-item">退出</view>
		</view>
	</view>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Name extends Vue {
}
</script>
<style lang='stylus' scoped>

.my
	.card
		height 300upx
		background-color #e8e8e8      
		margin 30upx
		border-radius 20upx

	.other
		margin 30upx
		margin-top 100upx
		font-size 32upx
		.other-item
			line-height 100upx
			border-bottom 1px solid #ccc
	
</style>