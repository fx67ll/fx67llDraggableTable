<template>
	<div class="draggable-table"></div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
	name: 'draggableTable',
	props: {},
	data() {
		return {};
	},
	watch: {
		null: {
			deep: true,
			handler: function(newval, oldVal) {}
		}
	},
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.quick-echarts {
	width: 100%;
	height: 100%;
}
</style>
