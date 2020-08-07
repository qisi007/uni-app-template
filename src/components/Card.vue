<template>
<div class="card">
    <div class="header">
        <div>title</div>
    </div>
    <div class="content">
        <slot name="content"></slot>
    </div>
    <div class="footer">
        <slot name="footer"></slot>
    </div>

</div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Name extends Vue {
}
</script>
<style lang='stylus' scoped>
</style>