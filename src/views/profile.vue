<template>
  <div>
    <x-header>header</x-header>
    <group title="个人资料">
      <cell title="姓名" :value="userName"></cell>
      <cell title="性别" :value="userSex"></cell>
      <popup-picker title="弹出选择框" :data="list"></popup-picker>
    </group>
    <group title>
      <cell title="..." value="..." is-link></cell>
      <cell title="..." value="..." is-link></cell>
    </group>
    <x-button type="primary">submit</x-button>
  </div>
</template>

<script>
import { Group, Cell, XButton, PopupPicker, XHeader } from "vux";
export default {
  components: {
    Group,
    Cell,
    XButton,
    PopupPicker,
    XHeader
  },
  data() {
    return {
      userName: "unknow",
      userSex: "male",
      list: [["choice 1", "choice2", "choice3"]]
    };
  }
};
</script>