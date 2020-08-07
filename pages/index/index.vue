<template>
	<view class="content">
		<!-- 顶部搜索 -->
        <view class="search">
			<div class="search-inp">
				<img src="../../static/images/search.png" alt="">
				<text>输入职位名称进行搜索...</text>
			</div>
		</view>
		<!-- 职位列表 -->
		<view class="list">
            <job-list :jobList='listArr'></job-list>
        </view>
	</view>
</template>

<script>
	import JobList from '../../components/business/JobList.vue';
	import api from '../../api/api.js';
	
	export default {
		data() {
			return {
				listArr: []
			}
		},
		components: {
			JobList
		},
		onLoad() {
			// 请求职位列表
			api.getJobList().then(res => {
				this.listArr = res.data
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
