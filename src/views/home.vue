<template>
  <div>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
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
