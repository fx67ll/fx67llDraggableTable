import draggableTable from './tables/draggable-table.vue';
draggableTable.install = function(Vue) {
    Vue.component(draggableTable.name, draggableTable);
};
export default draggableTable;