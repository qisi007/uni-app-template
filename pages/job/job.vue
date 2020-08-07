<template>
	<view class="job-wrap">
		<view class="msg">只要30秒，快速填写求职信息 ~ </view>
		<view class="form">
			<view class="item">
				<text class="label">姓名</text>
				<input type="text" placeholder="请输入" value="" />
			</view>
			<view class="item">
				<text class="label">选择职位</text>
				<view class="item_el">
					<input class="inp" type="text" placeholder="请输入" value="前端">
					<text>></text>
				</view>
			</view>
			<view class="item">
				<text class="label">手机号码</text>
				<input type="text" placeholder="请输入" value="13333333333" />
			</view>
			<view class="item">
				<text class="label">验证码</text>
				<view class="item_el">
					<input type="text" placeholder="请输入">
					<text class="code">获取验证码</text>
				</view>
				
			</view>
			<button class="apply-btn" @click="applyClick">立即申请</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			applyClick: function () {
				uni.navigateTo({
					url: '/pages/send/send'
				})
			}
		},
	}
</script>

<style>

</style>
