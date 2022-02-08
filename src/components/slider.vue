<template>
  <div class="anomalies">
    <!-- 头部 -->
    <div class="title">
      <img :src="src" class="rectangle" alt />
      <span>体温异常人员</span>
      <div class="line"></div>
    </div>
    <!-- 体温异常 -->
    <div class="content">
      <div class="icon">
        <img src="../assets/img/anomalies/体温异常icon@2x.png" alt />
      </div>
      <div class="fontstyle">体温异常人数</div>
    </div>
    <!-- 数字 -->
    <div class="number">
      <div class="item">
        <div class="flex-item">
          0
          <div class="line"></div>
        </div>
        <div class="flex-item">
          0
          <div class="line"></div>
        </div>
        <div class="flex-item">
          0
          <div class="line"></div>
        </div>
        <div class="flex-item">
          0
          <div class="line"></div>
        </div>
      </div>
    </div>

    <!-- 轮播 -->

    <!-- 容器 -->

    <div class="container">
    <slider3d :source="source"></slider3d>
    </div>
  </div>
</template>

<script>
import slider3d from "./slider3d.vue"
export default {
  components:{
    slider3d
  },
  data() {
    return {
      src: require("../assets/img/Screen/rectangle.png"),
     
      source: [
        {
          // portrait: require('../../../assets/img/anomalies/体温异常人数底座@2x.png'),
          portrait:require('../assets/img/anomalies/组 53649@2x.png'),
          name: "张三",
          temperature: "35.0",
          sex: 0,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
        {
          portrait:require('../assets/img/anomalies/组 53649@2x.png'),
          name: "王五",
          temperature: "36.0",
          sex: 1,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
        {
        portrait:require('../assets/img/anomalies/组 53649@2x.png'),
          name: "李四",
          temperature: "35.0",
          sex: 0,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
      ],
    };
  },
  mounted() {
    let valr = window.screen.height;
    console.log(valr);
    
  },
};
</script>

<style lang="scss">
html,
body {
  height: 2000px;
}
.anomalies {
  position: absolute;
  top: 88px;
  width: 620px;
  height: 960px;
  border: 1px salmon solid;
  // 标题
  .title {
    position: relative;
    width: 100%;
    height: 2.96vh;
    margin-bottom: 22px;

    .rectangle {
      width: 1.2vh;
      height: 1.2vh;
      position: absolute;
      top: calc(50% - 0.6vh);
      left: 0;
    }
  }
  span {
    font-size: 1.5vh;
    line-height: 1.5vh;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #01f6ff;
    position: absolute;
    left: 25px;
    top: calc(50% - 0.6vh);
  }
  .line {
    width: 100%;
    height: 0.1vh;
    position: absolute;
    bottom: 0;

    background: linear-gradient(270deg, #46f1ff 0%, rgba(81, 219, 252, 0) 100%);
  }
  // 体温异常底座
  .content {
    width: 61%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    min-height: 33px;
    margin: 0 auto;

    background-image: url("../assets/img/anomalies/体温异常人数底座@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .icon {
    display: flex;
    margin-bottom: 22px;
    img {
      width: 1.2vh;
      height: 1.2vh;
      vertical-align: middle;
    }
  }
  .fontstyle {
    font-weight: bold;
    // font-size: 14px;
    margin-bottom: 22px;
    font-size: 0.1414rem;
    color: #f5ffb1;
  }

  .number {
    // width: 244px;
    width: 12.7vw;
    height: 7.1vh;
    margin: 0 auto;
    background: url("../assets/img/anomalies/倒计时背景@2x.png") no-repeat;
    background-size: 100% 100%;
    .item {
      width: 9.2vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .flex-item {
        position: relative;
        // width: 40px;
        // height: 59px;
        width: 2vw;
        height: 5.5vh;
        margin-top: 8px;
        line-height: 5.5vh;
        border-radius: 3px;
        // line-height: 59px;
        color: #03eafe;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
        font-size: 0.404rem;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(
          180deg,
          rgba(3, 234, 254, 0.16) 0%,
          rgba(3, 234, 254, 0.02) 49%,
          rgba(3, 234, 254, 0.16) 100%
        );
        opacity: 1;
      }
      .line {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 0.1vh;
        background: linear-gradient(
          270deg,
          rgba(79, 224, 254, 0) 0%,
          #4fe0fe 49%,
          rgba(80, 225, 255, 0) 100%
        );
        // opacity: 1;
      }
    }
  }

  // width: 295px;
  // height:253px;
  // width:15.4vw;
  // height: 23.4vh;
  // position: relative;

  .container {
    width: 100%;
    height: 55.4%;
    margin: 0 auto;
    position: relative;
   

    
  }
}
</style>
