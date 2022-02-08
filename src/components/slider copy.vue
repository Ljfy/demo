<template>
  <div id="anomalies" class="main" style="position: absolute">
     <!-- :style="{
      left: statistics.style.left + 'px',
      top: statistics.style.top + 'px',
      width: statistics.style.width + 'px',
      height: statistics.style.height + 'px'
    }" -->
    <!--   class="main" -->
    <div class="title">
      <img :src="src" class="rectangle" />
      <span class="main-font">
        体温异常
        <!-- {{ $t('IOC.temperature') }} -->
      </span>
      <div class="line"></div>
    </div>

    <div class="content">
      <div class="center">
        <img
          class="icon"
          src="../assets/img/anomalies/体温异常icon@2x.png"
          alt=""
        />
        <span class="header-color enfonts"> 体温异常人数 </span>
        <!-- {{ $t('IOC.temperaturecount') }} -->
      </div>
    </div>
    <div class="number">
      <div class="mainbox">
        <div>
          {{ dataList[0] }}
          <div class="line"></div>
        </div>

        <div>
          {{ dataList[1] }}
          <div class="line1"></div>
        </div>

        <div>
          {{ dataList[2] }}
          <div class="line2"></div>
        </div>

        <div>
          {{ dataList[3] }}
          <div class="line3"></div>
        </div>
      </div>
    </div>
    <div class="anomalies">
      <template>
        <div class="about">
          
        </div>
        <!-- <carousel-3d
          v-if="newLists.length"
          :width="cwidth"
          :height="chidth"
          :space="90"
          :perspective="35"
          :display="3"
          :autoplay="true"
          :controls-visible="true"
          :controls-prev-html="'&#60; '"
          :controls-next-html="'&#62;'"
          :controls-width="30"
          :controls-height="60"
          :autoplayTimeout="3000"
          :animationSpeed="1000"
        > -->
          <!--  :clickable="false" -->
          <!-- :autoplay="true"
            :autoplayTimeout="3000" -->
          <!-- <slide v-for="(item, i) in newLists" :index="i" :key="i"> -->
            <!-- <img :src="item" /> -->

            <!-- 体温异常信息 -->
            <!-- v-if="locale == 'zh'"> -->
            <div class="anomalies_title">
              体温异常信息
            </div>
            <!-- <div class="enfont" v-else>
              <div class="anomalies_en">{{ $t("IOC.Abnormal") }}</div>
            </div> -->

            <div class="anomalies_contents_left">
              <img class="anomalies_img" :src="item.portrait" alt="" />
            </div>
            <div class="myinfo">
              <!-- 性别 -->
              <div class="myinfo_name">
                <!-- {{ $t("IOC.name") }} -->
                性别:
                </div>
              <div class="myinfo_font">{{ item.name }}</div>
              <!-- v-if="locale == 'zh'">
                {{ $t("IOC.bodyTemperature") }} -->
              <div class="myinfo_hot">
                体温异常信息
              </div>
              <!-- <div class="enlanguage" v-else>
                {{ $t("IOC.bodyTemperature") }}
              </div> -->
              <div class="myinfo_hotdu">{{ item.temperature }}°C</div>
            </div>
            <div class="personal">
              <div class="name commfont">
                <!-- {{ $t("IOC.gender") }} -->
                性别
              </div>
              <div class="sex">
                <!-- {{
                  locale == "zh"
                    ? item.sex == 1
                      ? "男"
                      : "女"
                    : item.sex == 1
                    ? "Male"
                    : "Female"
                }} -->
                {{item.sex ==1 ?"男":"女"}}
              </div>
            </div>

            <div class="ID">
              <div class="IDcard commfont">
                <!-- {{ $t("IOC.ID") }}: -->
                身份证
                </div>
              <div class="IDnumber">
                {{ item.identity }}
              </div>
            </div>
            <div class="phone">
              <div class="phone-card commfont">
                <!-- {{ $t("IOC.Phone") }}: -->
                  手机号
                
                </div>
              <div class="phone-number">{{ item.mobilePhone }}</div>
            </div>
            <div class="location">
              <div class="name commfont">
                <!-- {{ $t("IOC.Abnormalbodytemperature") }}: -->
                体温异常位置
              </div>
              <div class="location-title">{{ item.locale }}</div>
            </div>
          <!-- </slide>
        </carousel-3d> -->
      </template>

      <!-- 底座 -->
      <div class="base"></div>
    </div>

    <!-- <div class="mask"></div> -->
  </div>
</template>

<script>
// let Base64 = require('js-base64').Base64
// import numberList from '../../../utils/number/number'
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  // props:[statce],
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      organizationId: 0,
      src: require("../assets/img/Screen/rectangle.png"),
      list: [""],
      previous: 0,
      one: "",
      cwidth: "",
      locale: localStorage.getItem("locale"),
      now: Date.now(),
      newList: [],
      infoList: {
        identity: "",
        locale: "",
        mobilePhone: "",
        sex: "",
        temperature: "",
      },

      timer: null, //定时器
      dataList: [],
      newLists: [
        {
          // portrait: require('../../../assets/img/anomalies/体温异常人数底座@2x.png'),
          name: "张三",
          temperature: "35.0",
          sex: 0,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
        {
          // portrait: require('../../../assets/img/anomalies/体温异常人数底座@2x.png'),
          name: "王五",
          temperature: "36.0",
          sex: 1,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
        {
          // portrait: require('../../../assets/img/anomalies/体温异常人数底座@2x.png'),
          name: "李四",
          temperature: "35.0",
          sex: 0,
          identity: "412723199612243014",
          mobilePhone: "18738858969",
          locale: "铁心桥",
        },
      ],
      chidth: "",
      numbers: "",
      // websock: null
    };
  },
  props: ["statistics"],

  mounted() {
    // 体温异常人员统计
    // 执行定时器
    // this.getTemperatureStatistics()
    window.onresize = () => {
      this.changWidth();
    };
  },
  created() {
    // this.initWebSocket();
    // this.getTemperatureList();
    this.changWidth();
    // this.autoPlay()
  },

  methods: {
    // 根据电脑分辨率设置轮播图宽度
    changWidth() {
      if (document.body.clientWidth >= 1920) {
        this.cwidth = 266;
        this.chidth = 300;
      }

      if (document.body.clientWidth <= 1920) {
        this.cwidth = 200;
      }
    },

    getTemperatureList() {
      this.$api.getTemperatureList({ organizationId: 0 }).then((res) => {
        this.newList = res.abnormalInfoList;
        this.one = res.abnormalTotal;
        this.dataList = numberList(this.one);
      });
    },
    initWebSocket() {
      // let wsuri = "ws://" + //172.16.21.40:10000 + "/uas?token=";
      // const url = 'ws://172.16.21.40:10000/wsapp/client?token='
      const url = "ws://" + window.location.host + "/wsapp/client?token=";
      const wsuri = url + sessionStorage.getItem("token");
      // 新建一个socket对象
      const webscoket = new WebSocket(wsuri);
      webscoket.onopen = function (params) {
        // console.log('websocket开启')
      };
      webscoket.onmessage = (res) => {
        if (JSON.parse(res.data).type == "ioc_temperature_list") {
          let base64 = JSON.parse(res.data).content;
          this.getTemperatureList();
          // this.newList = JSON.parse(Base64.decode(base64)).abnormalInfoList
        }
      };
    },
  },
  watch: {
    // 监听语言切换
    "$i18n.locale": function () {
      this.locale = localStorage.getItem("locale");
      this.getTemperatureList();
    },
  },
};
</script>

<style lang="scss">
.main_box_center {
  width: 100%;
  height: calc(100% - 2.77vh);
}
#anomalies {
   position: absolute;
    width: 802px;
    top: 88px;
    left: 320px;
    height: 604px;
  background: rgba(0, 40, 61, 0.14);
  .enfonts {
    display: inline-block;
    vertical-align: middle;
    // text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .main {
      width: 100%;
    z-index: 3;
    border-top: 1px solid transparent;
    border-image: linear-gradient(
      63deg,
      rgba(0, 208, 255, 0) 0%,
      #00d0ff 48%,
      rgba(0, 208, 255, 0) 100%
    );
    border-image-slice: 10;
    background: url("../assets/img/anomalies/矩形 88@2x.png") no-repeat;
    background-size: cover;
    &-font {
      font-size: 1rem;
      color: #01f6ff;
      text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
  }
  }
  .enlanguage {
    // width: 48px;
    position: absolute;
    top: 35%;
    right: -15%;
    width: 69%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    color: #b7eff3;
    font-size: 1rem;
    text-align: center;
  }
  .enfont {
    padding: 0 0 10px 2px;
  }
  
  .content {
    width: 61%;
    height: 10%;
    min-height: 33px;
    text-align: center;
    position: relative;
    margin: 0px auto;
    margin-top: 22px;
    background-image: url("../assets/img/anomalies/体温异常人数底座@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .center {
      .icon {
        width: 7.85%;
        height: 7.85%;
        // height: 20%;
        vertical-align: middle;
        img {
          vertical-align: middle;
        }
      }
      .header-color {
        margin-top: -6px;
        display: inline-block;
        vertical-align: middle;
        color: rgba(245, 255, 177, 1);
      }
    }
  }
  .number {
    // width: 95%;
    // height: 12.5%;

    background: url("../assets/img/anomalies/倒计时背景@2x.png") no-repeat;
    background-size: 100% 100%;
    .mainbox {
      width: 95%;
      height: 40%;
      display: flex;
      margin-top: 5.055%;
      justify-content: center;
      align-items: center;
      div {
        position: relative;

        width: 14.5%;
        height: 100%;
        line-height: 67px;
        margin: 0px -10% 0px auto;

        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        color: #03eafe;
        border-radius: 3px;
        text-shadow: 0px 3px 12px rgba(0, 0, 0, 0.16);
        justify-content: space-between;
        background: linear-gradient(
          180deg,
          rgba(3, 234, 254, 0.16) 0%,
          rgba(3, 234, 254, 0.02) 49%,
          rgba(3, 234, 254, 0.16) 100%
        );
        opacity: 1;
        .line,
        .line3,
        .line1,
        .line2 {
          position: absolute;
          top: 30px;
          left: -2px;
          width: 100%;
          height: 1px;
          min-height: 1px;
          background: linear-gradient(
            270deg,
            rgba(79, 224, 254, 0) 0%,
            #4fe0fe 49%,
            rgba(80, 225, 255, 0) 100%
          );
          // opacity: 1;
        }
      }
      div:nth-child(4) {
        margin-right: 10.4%;
      }
    }
  }
  .anomalies {
    position: relative;
    // width: 100%;
    // width: 31.875vw;
    height: 86.1%;
    // margin-top: 11.1%;
    &_center {
      position: absolute;
      top: -40px;
      left: 0;
      width: 100%;
      height: 260px;
      margin-top: 38px;
      margin-left: 50px;
      font-weight: bold;
      cursor: pointer;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Chrome/Safari/Opera */
      -khtml-user-select: none; /* Konqueror */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
      .main_line {
        width: 100%;
        height: 1px;
        margin-bottom: 7px;
        background: linear-gradient(
          270deg,
          #46f1ff 0%,
          rgba(81, 219, 252, 0) 100%
        );
        opacity: 1;
      }
    }
    &_en {
      position: absolute;
      width: 100%;
      top: 12px;
      left: 28px;
      display: block;
      font-size: 1rem;
      text-align: center;
      color: #bffff2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-shadow: 0px 3px 10px #114b57;
    }
    .carousel-3d-container {
      overflow: visible !important;
      width: 65% !important;
      height: 66.6% !important;
      // height: 55.7% !important;
      .carousel-3d-controls {
        .next {
          width: 20px !important;
          height: 20px !important;
          line-height: 20px !important;
          font-size: 1rem;
          color: #fff;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
        }
        .prev {
          width: 20px !important;
          height: 20px !important;
          line-height: 20px !important;
          font-size: 18px;
          color: #fff;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
        }
        .prev[data-v-05517ad0] {
          cursor: pointer;
          left: -18px;
        }

        .next[data-v-05517ad0] {
          cursor: pointer;
          right: -18px;
        }
      }
      .carousel-3d-slide {
        width: 100% !important;
        height: 100% !important;
        // height: 70% !important;
        background: url("../assets/img/anomalies/组 53649@2x.png") no-repeat !important;
        background-size: 100% 100% !important;
        border-style: none !important;
      }
      .carousel-3d-slider {
        width: 50% !important;
        height: 100% !important;
      }
    }
    &_title {
      position: absolute;
      top: 5%;
      left: 37%;
      display: block;
      font-size: 1rem;

      text-align: center;
      color: #bffff2;
      text-shadow: 0px 3px 10px #114b57;
    }
    &_img {
      position: absolute;
      width: 37.5%;
      height: 37.5%;
      top: 13.5%;
      left: 8.31%;
      // border: 1px solid #707070;
    }
  }
  .myinfo {
    &_name {
      position: absolute;
      top: 15.6%;
      right: 18.15%;
      color: #15d9e7;
      font-size: 1.1rem;
      // font-size: 22px;
      text-align: center;
    }
    &_font {
      position: absolute;
      top: 26.3%;
      right: 17%;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      font-size: 1.1rem;
      // color: #ffffff;
    }
    &_hot {
      position: absolute;
      top: 36.5%;
      right: 18%;
      color: #b7eff3;
      font-size: 1.1rem;
      text-align: center;
    }
    &_hotdu {
      position: absolute;
      top: 46.5%;
      right: 12.5%;
      color: #fff;
      font-size: 1.1rem;
      // text-align: center;
    }
  }
  .base {
    position: absolute;
    top: 35.5%;
    left: 7.94%;
    width: 79%;
    height: 35.5%;
    background-image: url("../assets/img/anomalies/发光效果@2x.png");
    background-size: 100% 100%;
    z-index: 1;
  }
  .personal {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    left: 5%;
    top: 53.26%;
    .personalcard {
      .name {
        width: 25.5%;
      }
      .sex {
        width: 10%;
      }
    }
  }

  .ID {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    left: 5%;
    top: 63.26%;
  }
  .phone {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    left: 5%;
    top: 74.26%;
  }
  .location {
    position: absolute;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    // left: 4%;
    top: 85.26%;
    .name {
      width: 29%;
    }
    .location-title {
      width: 37.5%;
    }
   }

  .main-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, #46f1ff 0%, rgba(81, 219, 252, 0) 100%);
    opacity: 1;
  }

  .commfont {
    color: #b7eff3;
  }


}
</style>
