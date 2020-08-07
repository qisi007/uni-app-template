<template>
	<view class="send-wrap">
		<img src="../../static/images/success.jpg" alt="">
		<button @click="back">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			// 返回详情页
			back: function () {
				uni.navigateTo({
					url: '/pages/detail/detail'
				})
			}
		},
	}
</script>

<style>

</style>
