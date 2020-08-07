<template>
	<view class="job-detail">
		<!-- 详情上方区域 -->
		<view class="job-detail_top">
			<view class="job-name">{{jobDetail.jobName}}</view>
			<view class="money">
				<text class="num">{{jobDetail.money}}</text>
				<text class="unit">元/月</text>
			</view>
			<view class="ask">
				<text class="tag">要求</text>
				<text class="words">{{jobDetail.ask}}</text>
			</view>
			<view class="people">
				<img src="../../static/images/head.png" alt="">
				<view class="content">
					<view class="name">{{jobDetail.people.name}}</view>
					<view class="company">
						<text>{{jobDetail.people.compony}}</text>
						<text class="line">|</text>
						<text>{{jobDetail.people.work}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="back"></view>
		<!-- 职位描述 -->
		<view class="draw">
			<view class="title">职位描述</view>
			<view class="prize">
				<view class="say">福利待遇</view>
				<img src="../../static/images/prize.png" alt="">
			</view>
			<view class="office">
				<view class="dec">任职要求</view>
				<view class="list">
					<view v-for="(item,index) in officeArr"
					      :key=index
						  class="item">
						  {{item}}
					</view>
					<view class="more">
						查看全部
					</view>
				</view>
			</view>
		</view>
		
		<view class="back"></view>
		<!-- 公司介绍 -->
		<view class="qj">
			<view class="top">
				<img src="../../static/images/logo.png" alt="">
				<view class="qj-company">
					<view class="company-name">唐山千家房地产经纪有限公司</view>
					<view class="company-msg">1000人以上/房地产/物业管理</view>
				</view>
			</view>
			<view class="company-dec">
				<view>我是公司介绍我是公司介绍我是公司介绍我是公司介绍我是
				公司介绍我是公司介绍我是公司介绍我是公司介绍我是公司
				介绍我是公司介绍我是公司介绍我是公司介绍我是公司介绍
				我是公司介绍我是公司介绍我是公司介绍我是公司介绍我是
				公司介绍我是公司介绍我是公司介绍我是公司介绍我是公司
				介绍我是公司介绍我是公司介绍我是公司介绍我是公司介绍
				我是公司介绍我是公司介绍我是公司介绍我是公司介绍我是
				公司介绍我是公司介绍我是公司介绍我是公司介绍我是公司
				介绍我是公司介绍我是公司介绍我是公司介绍我是公司介绍
				我是公司介绍我是公司介绍我是公司介绍我是公司介绍我是
				公司介绍我是公司介绍我是公司介绍我是公司介绍</view>
				<view class="more">查看全部</view>
			</view>
			<view class="address">唐山 - 路北 唐山路北汇金中心B座八层</view>
		</view>
		<view class="back"></view>
		<!-- 其他职位推荐 -->
		<view class="other-job">
			<view class="title">
				其他职位推荐
			</view>
			<view class="job-list" 
			     v-for="(item,index) in otherJob"
				 :key=index>
				<view>{{item.job}}</view>
				<view>
					<text class="price">{{item.price}}</text>
					<text>元/月 >></text>
				</view>
			</view>
			<view class="more-job" @click="jumpToList">点击查看更多职位推荐 >> </view>
		</view>
		<button class="send-btn" @click="sendNow">立即申请</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jobDetail: {
					jobName: 'Java 开发人员',
					money: '8000-16000',
					ask:'招10人/不限工作经验/不限学历',
					people: {
						name: '范经理',
						compony: '唐山千家房地产经济有限公司',
						work: '人事经理'
					}
				},
				officeArr: [
					'大专以上学历',
					'熟悉Java编程',
					'熟悉Git命令',
					'熟悉数据库操作',
					'理解面向对象',
					'了解前后端分离开发'
				],
				otherJob: [
					{
						job: "Java 开发人员",
						price: '8000-16000'
					},
					{
						job: "Java 开发人员",
						price: '8000-16000'
					},
					{
						job: "Java 开发人员",
						price: '8000-16000'
					},
					{
						job: "Java 开发人员",
						price: '8000-16000'
					},
					{
						job: "Java 开发人员",
						price: '8000-16000'
					}
				]
			};
		},
		onLoad: function ( option ) {
			console.log(option)
		},
		methods: {
			// 跳转至列表页面
			jumpToList: function () {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			// 申请职位
			sendNow: function () {
				uni.navigateTo({
					url: '/pages/job/job'
				})
			}
		},
	}
</script>

<style>

</style>
