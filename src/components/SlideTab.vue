<template>
	<view class="tab">
		<view class="slide-tab"
		      ref="slideTab">
			<view class="slide-tab_item"
			      v-for="(tab, index) in list"
			      :key="index"
				  :style="{
					  'color': index == active ? '#ffd524' : '#5c5c5c',
					  'font-size': index == active ? '60rpx' : '40rpx'
				  }"
				  @click="tabClick(index)">
				{{tab}}
			</view>
		</view>
	</view>
</template>
<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator';
	@Component
	export default class SlideTab extends Vue {
		// 接收标签列表
		@Prop({
			type: Array,
			default: () => []
		})
		list!: [];
		// 当前激活标签的索引
		@Prop({
			type: Number,
			default: 0
		})
		active!: 0;

		/**
		 * @name 标签点击事件
		 * @param {number} index 当前激活标签的索引
		 * @return {void}
		 * */
		tabClick ( index:number ) {
			this.$emit('change', index);
		}
	}
	
</script>
<style lang="stylus">
	.slide-tab
		color #5c5c5c
		
		.slide-tab_item
			display inline-block
			min-width 100upx
			margin 0 10upx
			transition color .3s
			line-height 100upx

</style>