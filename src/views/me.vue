<template>
  <div>
    <x-header>header</x-header>
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
          <span class="caption">今日赏金</span>
        </div>
      </div>
    </card>
    <card>
      <swiper slot="content" auto loop height="8em" :interval="6000" dots-position="center">
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
          <flow>
            <flow-state title="0" is-done></flow-state>
            <flow-line tip="进行中" :process-span="userInfo.memberPoint * 100 / value"></flow-line>
            <flow-state :title="value.toString()"></flow-state>
          </flow>
        </swiper-item>
      </swiper>
    </card>
    <card>
      <div slot="content" class="img-btn-container">
        <img src="/src/assets/money-guan.png" @click="routeToReward" class="imgBtn">
        <img src="/src/assets/task-view.png" @click="routeToTask" class="imgBtn">
      </div>
    </card>
    <card>
      <div slot="content" class="nav-section">
        <div @click="$router.push({name: 'profile'})">
          <img src="/src/assets/setting.png">
          <br>
          <span>个人资料</span>
        </div>
        <div>
          <img src="/src/assets/message.png">
          <br>
          <span>消息</span>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import {
  Card,
  Swiper,
  SwiperItem,
  Flow,
  FlowState,
  FlowLine,
  Tabbar,
  TabbarItem,
  XHeader
} from "vux";
export default {
  components: {
    Card,
    Swiper,
    SwiperItem,
    Flow,
    FlowState,
    FlowLine,
    XHeader
  },
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
  created() {
    this.getUserInfo();
  },
  methods: {
    // 获取用户的信息，包括不限于一堆账户信息，佣金等
    getUserInfo() {
      // 获取逻辑写在这里
    },
    // 路由导航到赏金管理页面
    routeToReward() {
      this.$router.push({ name: "reward" });
    },
    routeToTask() {
      this.$router.push({ name: "task-view" });
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
.img-btn-container {
  display: flex;
  justify-content: space-evenly;
}
.imgBtn {
  margin: 3% 0;
  height: 5em;
}
.nav-section {
  @navImgSize: 2.5em;
  display: flex;
  justify-content: space-evenly;
  div {
    margin: 3% 0;
    font-size: 1em;
    text-align: center;
    img {
      width: @navImgSize;
      height: @navImgSize;
      margin-bottom: -0.3em;
    }
    span {
    }
  }
}
</style>
