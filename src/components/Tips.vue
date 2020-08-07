<template>
<transition name="fade">
    <div class="tips" 
        v-if="value"
        :style="{
            height: height + 'upx',
            background
        }"
        >
        <slot></slot>
    </div>
</transition>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
@Component
export default class Tips extends Vue {
    // 高度
    @Prop({default: 60, type: Number})
    height?: number;

    // 背景颜色
    @Prop({default: 'yellow', type: String})
    background?: string;

    // 提示控制开关
    @Prop({default: false, type: Boolean,required: true})
    value:boolean = false

}
</script>
<style lang='stylus' scoped>
.tips 
    width 100%

.fade-enter-active
.fade-leave-active
    transition all .5s ease-in-out

.fade-enter
.fade-leave-to
    transform translateX(-100%)
</style>