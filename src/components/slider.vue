<template>
  <div>
    <transition name="fade">
      <div class="swiper">
        
        <div
          class="img"
          v-for="(item, index) in imgs"
          :style="config5[index]"
          :key="index"
          
        >
          <div class="font">{{ item.index }} 当前:{{ item.id }}</div>
        </div>
      </div>
    </transition>
    <div @click="prev" class="prev" @mouseenter="changeImgBtn()"
          @mouseleave="restore"><</div>
    <div @click="next" class="next" @mouseenter="changeImgBtn()"
          @mouseleave="restore">></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      currentIndex: 1, //当前中间imgs数组中index
      imgs: [
        {
          id: "莱因哈特1",
          index: 0,
          cover: require("../assets/img/anomalies/组 53649@2x.png"),
        },

        {
          id: "卢西奥3",
          index: 1,
          cover: require("../assets/img/anomalies/组 53649@2x.png"),
        },
        {
          id: "裂空6",
          index: 2,
          cover: require("../assets/img/anomalies/组 53649@2x.png"),
        },
      ],
      previous: 0,
      config5: [
        {
          // id: 'B',
          position: "absolute",
          width: "28%",
          height: "82%",
          top: "14%",
          left: "13%",
          opacity: 1,
          zIndex: 2,
          transition: ".4s",
        },
        {
          id: "center",
          position: "absolute",
          width: "45%",
          height: "100%",
          top: "0px",
          left: "50%",
          marginLeft: "-22.5%",
          opacity: 1,
          zIndex: 4,
          transition: ".4s",
        },
        {
          // id: 'D',
          position: "absolute",
          width: "28%",
          height: "82%",
          top: "14%",
          left: "61.8%",
          opacity: 1,
          zIndex: 2,
          transition: ".4s",
        },
      ],
    };
  },

  created() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.prev();
    }, 1000);
  },
  methods: {
    // 鼠标悬停关闭定时器
    changeImgBtn() {
      //  this.previous = index
      clearInterval(this.timer);
    },

    // 鼠标离开打开定时器
    restore() {
      this.timer = setInterval(() => {
        this.prev();
      }, 1000);
    },
    // 滑动上一个
    prev() {
      // this.imgs.unshift(this.imgs.pop());
      this.config5.push(this.config5.shift());
      this.currentIndex = this.currentIndex - 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgs.length - 1;
      }
    },
    // 滑动下一个
    next() {
      // this.imgs.push(this.imgs.shift());
      this.config5.unshift(this.config5.pop());
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex > this.imgs.length - 1) {
        this.currentIndex = 0;
      }

      // console.log(this.currentIndex);
    },

    // 当前imgs在位置上的index（并非img数组的index）
    centerIndex(val) {
      if (val == "prev") {
        for (let val of this.imgs) {
          if (val.index == this.imgs.length - 1) {
            val.index = 0;
          } else {
            val.index = val.index + 1;
          }
        }
      } else {
        for (let val of this.imgs) {
          if (val.index == 0) {
            val.index = this.imgs.length - 1;
          } else {
            val.index = val.index - 1;
          }
        }
      }
    },

    // addCardStyle() {
    //     if (this.imgs.length > 2) {
    //         let addtime = this.imgs.length - 2;
    //         for (let i = 0; i < addtime; i++) {
    //             console.log('add');
    //             this.config5.push({
    //                 id: 'center',
    //                 position: 'absolute',
    //                 width: '45%',
    //                 height: '100%',
    //                 top: '0px',
    //                 left: '50%',
    //                 marginLeft: '-22.5%',
    //                 opacity: 0,
    //                 transition: '.1s'
    //             });
    //         }
    //     }
    // }
  },
  created() {
    //  加入样式位置的index
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  border: 1px red solid;
  height: 400px;
  position: relative;
  overflow: hidden;

  div {
    // opacity: 0;
  }
  .img {
    width: 100%;
    height: 100%;
    background: url("../assets/img/anomalies/组 53649@2x.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .font {
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 999;
      color: red($color: #000000);
      font-size: 0.1616rem;
    }
  }
  
}
.prev{
    position: absolute;
    top: 10px;
    left: 20px;
  }
</style>
