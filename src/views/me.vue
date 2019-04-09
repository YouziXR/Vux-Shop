<template>
  <div>
    <card>
      <div slot="header" class="vux-1px-b card-header">{{userID}}</div>
      <div slot="content" class="card-content">
        <div class="vux-1px-r">
          <span>￥{{userInfo.rewardHistory}}</span>
          <br>
          <span class="caption">可提现赏金</span>
        </div>
        <div>
          <span>￥{{userInfo.rewardToday}}</span>
          <br>
          <span class="caption">当日赏金</span>
        </div>
      </div>
    </card>
    <card>
      <swiper slot="content" auto loop height="5em" :interval="6000">
        <swiper-item
          v-for="(value, key, index) in memberPointLevel"
          :key="index"
          class="swiper-item"
        >
          <span class="memberPoint">当前：{{userInfo.memberPoint}}</span>
          <span>
            再获取
            <span style="color: blueviolet;">{{value}}</span>
            积分即可升级
          </span>
        </swiper-item>
      </swiper>
    </card>
  </div>
</template>

<script>
import { Card, Swiper, SwiperItem } from "vux";
export default {
  data() {
    return {
      userInfo: {
        userName: "unknow",
        rewardHistory: 99,
        rewardToday: 1,
        memberPoint: 990
      },
      memberPointLevel: {
        member1st: 2000,
        member2nd: 20000,
        member3rd: 40000,
        member4th: 99999
      }
    };
  },
  components: {
    Card,
    Swiper,
    SwiperItem
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    // 获取用户的信息，包括不限于一堆账户信息，佣金等
    getUserInfo() {
      // 获取逻辑写在这里
    }
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
@import "~vux/src/styles/1px.less";
.card-header {
  padding: 5%;
  color: rgb(146, 128, 128);
}
.card-content {
  display: flex;
  padding: 3%;
  div {
    flex: 1;
    // display: inline;
    text-align: center;
    font-size: 1.1em;
  }
  .caption {
    font-size: 0.8em;
    color: #aaa;
  }
}
.swiper-item {
  padding: 2%;
  box-sizing: border-box;
}
.memberPoint {
  background-color: aliceblue;
  color: blueviolet;
  padding: 1%;
  border-radius: 5%;
  font-size: 0.8em;
}
</style>
