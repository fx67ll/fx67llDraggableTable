import draggableTable from './tables/draggableTable.vue';
draggableTable.install = function(Vue) {
    Vue.component(draggableTable.name, draggableTable);
};
export default draggableTable;