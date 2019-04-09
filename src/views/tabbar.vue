<template>
  <div>
    <router-view keep-alive></router-view>
    <tabbar style="position: fixed;" slot="bottom">
      <!-- <tabbar-item selected :link="{name: 'home'}"> -->
      <tabbar-item :selected="selected === 'home'" :link="{name: 'home'}">
        <img src="../assets/home page.png" slot="icon">
        <img src="../assets/home page fill.png" slot="icon-active">
        <span slot="label">首页</span>
      </tabbar-item>
      <!-- <tabbar-item :selected="$route.name === 'me'" :link="{name: 'me'}"> -->
      <tabbar-item :selected="selected === 'me'" :link="{name: 'me'}">
        <img src="../assets/mine.png" slot="icon">
        <img src="../assets/mine fill.png" slot="icon-active">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

export default {
  data() {
    return {
      // selected: "home"
    };
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    // 获取用户信息，包括账号姓名等基本信息
    getUser() {
      /* 
        获取用户信息的逻辑写在这里
       */
    }
  },
  created() {
    this.getUser();
  },
  mounted() {
    /* let to = this.$route.name;
    if (to == "home") {
      this.selected = "home";
    } else if (to == "me") {
      this.selected = "me";
    } */
  },
  watch: {},
  computed: {
    selected: function() {
      let name = this.$route.name;
      return name;
    },
    userID: {
      get() {
        return this.$store.state.user.userID;
      },
      set(val) {
        this.$store.commit("user/setUserID", val);
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
