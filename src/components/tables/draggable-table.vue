<template>
	<div class="dra-box">
		<table class="dra-table">
			<thead>
				<tr>
					<th><div class="cell">序号</div></th>
					<th><div class="cell">名称</div></th>
					<th><div class="cell">操作</div></th>
				</tr>
			</thead>
			<draggable v-model="tableData" tag="tbody" @change="dragChange">
				<tr v-for="(item, index) in tableData" :key="item.key" :class="{ 'table-menu-isshow': item.isShow }" @click="showRowMenu(item, index)">
					<td>
						<div class="cell">{{ index + 1 }}</div>
						<div class="table-menu" v-if="item.isShow">
							<div class="table-menu-item"><span @click="addRow(index, 'top')">上方添加行</span></div>
							<div class="table-menu-item"><span @click="addRow(index, 'bottom')">下方添加行</span></div>
							<div class="table-menu-item"><span @click="deleteRow(item.key)">删除此行</span></div>
						</div>
					</td>
					<td><div class="cell"></div></td>
					<td><div class="cell"></div></td>
				</tr>
			</draggable>
		</table>
	</div>
</template>

<script>
import draggable from 'vuedraggable';
import _ from 'underscore';
export default {
	name: 'draggableTable',
	components: {
		draggable
	},
	props: {
		tableData: {
			type: Array,
			required: true,
			default: function() {
				return [{ isShow: false }, { isShow: false }, { isShow: false }];
			}
		}
	},
	watch: {
		// tableData: {
		// 	deep: true,
		// 	handler: function(newval, oldVal) {
		// 	}
		// }
	},
	data() {
		return {};
	},
	methods: {
		hideAllMenu() {
			var self = this;
			setTimeout(function() {
				_.each(self.tableData, function(item, key) {
					self.tableData[key].isShow = false;
				});
			}, 100);
		},
		showRowMenu(item, index) {
			var self = this;
			_.each(this.tableData, function(obj, key) {
				if (index !== key) {
					self.tableData[key].isShow = false;
				}
			});
			this.tableData[index].isShow = !this.tableData[index].isShow;
		},
		addRow(index, direction) {
			this.hideAllMenu();
		},
		dragChange() {}
	}
};
</script>

<style lang="less" scoped>
.dra-box {
	width: 100%;
	height: 100%;
	.dra-table {
		width: 100%;
		height: 100%;
		cursor: pointer;
		text-align: center;
		line-height: 23px;
		// table-layout: fixed;
		border-collapse: collapse;
		border-spacing: 0;
		border-left: 1px solid #ebeef5;
		border-bottom: 1px solid #ebeef5;
		thead {
			// color: #909399;
			// font-weight: 500;
			th {
				line-height: 30px;
			}
		}
		th {
			overflow: hidden;
			user-select: none;
			// background-color: #fff;
			// background: #f5f7fa;
			background: rgba(0, 0, 0, 0.02);
		}
		td,
		th {
			padding: 12px 0;
			box-sizing: border-box;
			text-overflow: ellipsis;
			vertical-align: middle;
			position: relative;
			text-align: center;
			border-right: 1px solid #ebeef5;
			border-top: 1px solid #ebeef5;
		}
		tbody {
			display: table-row-group;
			vertical-align: middle;
			tr:hover {
				// background: #f5f7fa;
				background: rgba(0, 0, 0, 0.02);
			}
		}
		tr {
			display: table-row;
		}
		.cell {
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-all;
			line-height: 23px;
			padding-left: 10px;
			padding-right: 10px;
		}
		.table-menu {
			position: absolute;
			top: 62px;
			box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.28);
			border-radius: 1px;
			background-color: #ffffff;
			z-index: 999;
			.table-menu-item {
				width: 110px;
				height: 40px;
				line-height: 40px;
				span {
					display: inline-block;
					width: calc(100% - 20px);
					height: 100%;
					margin: 0 auto;
					border-bottom: 1px solid #e4e4e4;
				}
			}
			.table-menu-item:hover {
				background-color: #e6f7ff;
				border-right: 4px solid #1890ff;
			}
			.table-menu-item:last-child > span {
				border-bottom: 1px solid transparent;
			}
		}
		.table-menu-isshow {
			background: rgba(24, 144, 255, 0.07);
			border: 2px solid #1890ff;
		}
	}
}
</style>
