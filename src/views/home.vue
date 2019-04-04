<template>
  <div class="home">
    <div class="swiper">
      <masker :opacity="0">
        <swiper :list="img_list" auto loop></swiper>
        <div slot="content">{{ dateNow }}</div>
      </masker>
    </div>
    <group>
      <cell value="更多" is-link :link="{name: 'me'}" value-align="right">
        <img slot="icon" src="/src/assets/msg-alert.png" style="width: 1.5em;height:1.5em;">
      </cell>
    </group>
  </div>
</template>
<script>
import { Swiper, Masker, Group, Cell } from "vux";
export default {
  data() {
    return {
      img_list: [
        {
          url: "javascript:;",
          img: "../src/assets/swipe-img-dog-1.jpg"
          // title: "swipe-img-1"
        },
        {
          url: "javascript:;",
          img: "../src/assets/swipe-img-dog-2.jpg"
          // title: "swipe-img-2"
        }
      ]
    };
  },
  computed: {
    dateNow: function() {
      let date = new Date();
      let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDay();
      return year + "-" + month + "-" + day;
    }
  },
  components: {
    Swiper,
    Masker,
    Group,
    Cell
  }
};
</script>
<style lang="less">
.vux-masker {
  background: linear-gradient(-90deg, transparent, rgba(0, 0, 0, 0.5));
  width: 50%;
  div {
    margin-top: 40%;
    color: white;
  }
}
</style>
