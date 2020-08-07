<template>
	<view class="job-list">
		<view class="item" 
		      v-for="(item, index) in jobList"
			  :key=index
			  @click="searchDetail(item)">
			<view class="item-left">
				<view class="job-name">
					{{item.jobName}}
				</view>
				<view class="tags">
					<text v-for="(tag, indexs) in item.tags">{{tag}}</text>
				</view>
			</view>
			<view class="item-right">
				<view class="money">
					<text class="num">{{item.money}}</text>
					<text class="unit">元/月</text>
				</view>
				<view class="content">
					<text>浏览{{item.lookHistory}}</text>
					<text>|</text>
					<text>分享{{item.shareCount}}</text>
				</view>
			</view>
		</view>
		<view class="bottom-line"
		      v-if="jobList.length>8">——————我是有底线的——————</view>
	</view>
</template>

<script>
	export default {
		name: 'JobList',
		data () {
			return {

			}
		},
		props:{
			jobList: {
				type: Array,
				default: []
			}
		},
		methods:{
			searchDetail: function ( item ) {
				let { id } = item;
				// 跳转到职位详情页面
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style>
</style>
