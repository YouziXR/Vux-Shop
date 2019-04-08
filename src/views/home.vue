<template>
  <div class="home">
    <div class="swiper">
      <masker :opacity="0">
        <swiper :list="img_list" auto loop></swiper>
        <div slot="content">{{ dateNow }}</div>
      </masker>
    </div>
    <group>
      <!-- 这里将link绑定的路由替换成需要的路由名称 -->
      <cell value="更多" is-link :link="{name: 'me'}" value-align="right">
        <img slot="icon" src="/src/assets/msg-alert.png" style="width: 1.5em;height:1.5em;">
      </cell>
    </group>
    <group>
      <p class="orders">
        剩余接单次数：
        <b>{{orderTimes}}</b>
      </p>
      <p class="activate-order">开始接单</p>
    </group>
  </div>
</template>
<script>
import { Swiper, Masker, Group, Cell, dateFormat } from "vux";
export default {
  data() {
    return {
      dateNow: dateFormat(new Date(), "YYYY-MM-DD"),
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
      ],
      orderTimes: 0
    };
  },
  created() {
    this.getOrderTimes();
  },
  methods: {
    // 获取剩余的接单次数
    getOrderTimes: function() {
      // 取得接单次数的逻辑写在这里
    }
  },
  computed: {},
  components: {
    Swiper,
    Masker,
    Group,
    Cell
  }
};
</script>
<style lang="less">
@activate-order-size: 8em;
.vux-masker {
  background: linear-gradient(-90deg, transparent, rgba(0, 0, 0, 0.5));
  width: 50%;
  div {
    margin-top: 40%;
    color: white;
  }
}
.orders {
  text-align: center;
  font-size: 1.2em;
}
.activate-order {
  width: @activate-order-size;
  height: @activate-order-size;
  text-align: center;
  line-height: @activate-order-size;
  margin: 5% auto;
  border-radius: 50%;
  background-color: aliceblue;
  color: rgba(34, 102, 250, 0.685);
  font-size: 1.2em;
  box-shadow: 0em 0.2em 0.2em rgba(3, 3, 3, 0.212);
}
</style>
