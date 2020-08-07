
<template>
	<view class="index">
		<slide-tab :list="tabList"
		           :active="activeTabIndex"
				   @change="tabChange">
		</slide-tab>
		<tips v-model="tipsShow">
			<view style="font-size: 24upx;line-height: 60upx;text-align: center">更新了5条数据</view>
		</tips>
		<view class="main">
			<view class="list">
				<view class="list-item" v-for="i in 10" :key="i">
					<view class="tip">新上</view>
					<view class="top">
						<img src="../../static/head.jpg" alt="">
						<view class="info">
							<view>color</view>
							<view>info 2020-09-09</view>
						</view>
					</view>

					<view class="content">A cookie associated with a cross-site resource at http://localhost/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.</view>
					<view class="footer">
						<text>转发</text>
						<text>评论</text>
						<text>点赞</text>
					</view>
				</view>
			</view>
		</view>


	</view>
	
</template>
<script lang="ts">

import SlideTab from "@/components/SlideTab.vue";
import Tips from "@/components/Tips.vue";
import Card from "@/components/Card.vue";
import { Vue,Component } from "vue-property-decorator";
@Component({
	components: {
		SlideTab,
		Tips,
		Card
	}
})
export default class Index extends Vue {
	// 导航配置
	private tabList: Array<string> = ['推荐','吐槽','今日最佳'];
	// 激活导航索引
	private activeTabIndex: number = 0;
	// 提示控制开关
	private tipsShow: boolean = false
	
	tabChange ( value:any ) {
		this.activeTabIndex = value
		this.tipsShow = true;
		setTimeout(() => {
			this.tipsShow = false;
		},1000)
	}
	
}
</script>
<style lang="stylus" scoped>

.list
	.list-item

		margin 30upx 20upx
		padding 20upx 20upx 0 20upx
		border-radius 20upx
		position relative
		overflow hidden
		box-shadow 10upx 10upx 20upx 0upx rgba(0,0,0,.08)
		
		.tip
			width 200upx
			height 40upx
			line-height 40upx
			text-align center
			background-color #ef8
			font-size 24upx
			position absolute
			right -72upx
			top 20upx
			transform rotate(45deg)


		.top
			display flex

			img 
				height 80upx
				width 80upx
				border-radius 50%
			
			.info
				margin-left 20upx
				font-size 26upx
				line-height 40upx
				color rgba(0,0,0,.8)

				view
					&:first-child
						font-size 32upx
						font-weight  600

		
		.content
			line-height 40upx
			margin-top 26upx
			font-size 34upx
			word-break break-all

		.footer
			border-top 1px solid #ccc
			margin-top 10upx
			height 70upx
			font-size 28upx	
			display flex
			justify-content space-around
			align-items center
			color #5c5c5c
			


</style>