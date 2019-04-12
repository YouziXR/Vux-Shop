<template>
  <div>
    <x-header>Header</x-header>
    <tab>
      <tab-item selected @on-item-click="currentTab='today-task'">今日任务</tab-item>
      <tab-item @on-item-click="currentTab='past-task'">过往任务</tab-item>
      <tab-item @on-item-click="currentTab='failed-task'">失败任务</tab-item>
    </tab>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem } from "vux";
import todayTask from "./task/today-task";
import pastTask from "./task/past-task";
import failedTask from "./task/failed-task";
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    todayTask,
    pastTask,
    failedTask
  },
  data() {
    return {
      currentTab: "today-task"
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    }
  }
};
</script>