<template>
  <div class="main">
    <div class="title">
      <span>车辆布控实时分析</span>
      <div class="line"></div>
    </div>
    <div class="left">
      <div class="time">2022/2/7</div>
      <div class="streamer">
        <div class="line"></div>
      </div>
      <div class="imgage">
        <!-- <img src="../assets/img/2.jpg" alt="" /> -->
      </div>
    </div>

   <div class="flex-box">
      <div class="mains">
      <div ref="cartes" id="carte"></div>
    </div>
    <div class="font">匹配度</div>

   </div>
    <div class="three">
      <div class="imgs">
      <img src="../assets/img/2.jpg" alt="" />
    </div>
    </div>
    <div class="number">
      <img src="../assets/img/anomalies/今日识别人数icon@2x.png" alt="" />
    </div>
    <div class="fonts">布控数量</div>
    <div class="count">0个</div>

    <div class="numbers">
      <img src="../assets/img/anomalies/今日识别车辆icon@2x.png" alt="" />
    </div>

    <div class="fontss">今日识别车辆</div>
    <div class="counts">0个</div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {}
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      let myChart = echarts.init(document.getElementById('carte'))
      let option = null
      option = {
        title: [
          {
            x: 'center',
            top: '55%',
            textStyle: {}
          },
          {
            text: '23%',
            x: 'center',
            top: '38%',
            textStyle: {
              fontSize: '12',
              color: '#FFFFFF'
            }
          }
        ],
        polar: {
          radius: ['42%', '52%'],
          center: ['50%', '50%']
        },
        angleAxis: {
          max: 100,
          show: false
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 90,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(66, 66, 66, .3)'
            },
            //
            data: [50],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(80, 225, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(80, 225, 255, 1)'
                  }
                ])
              }
            }
          },
          {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['56%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 1,
              borderColor: '#34495e'
            }
          },
          {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['38%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 1,
              borderColor: '#34495e'
            }
            // data: [75]
          }
        ]
      }

      let resizeFn = () => {
        myChart.resize()
      }
      window.addEventListener('resize', resizeFn)
      this.$once('beforeDestroy', () => {
        window.removeEventListener('resize', resizeFn)
      })
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  position: absolute; 
  display: flex;
  width: 400px;
  height: 230px;
  background: #000;
  .title {
    width: 100%;
    height: 2.96vh;
    margin-bottom: 1.2vh;
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(0, 82, 96, 0) 16%,
      rgba(0, 82, 96, 0.04) 33%,
      rgba(0, 82, 96, 0.17) 50%,
      rgba(0, 82, 96, 0.38) 68%,
      rgba(0, 82, 96, 0.68) 85%,
      #005260 100%
    );
    opacity: 0.39;
    span {
      font-size: 1.5vh;
      line-height: 1.5vh;
      font-family: Source Han Sans CN;
      font-weight: bold;
      position: absolute;
      left: 25px;
      top: calc(50% - 0.6vh);
      color: #03eafe;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
    }
    .line {
      position: absolute;
      bottom: 0;
      width: 7.7vw;
      border: 1px solid #00dad8;
      opacity: 1;
    }
  }
  .left {
    width: 20.6%;
    height: 55.9%;
    margin-left: 0.2vh;
    background: url('../assets/img/2.jpg') no-repeat center center;
    background-size: 90% 90%;
    // border: 1px solid red;
    .time {
      position: absolute;
      bottom: 0.0505rem;
      right: calc(100% - 0.55rem);
      color: #fff;
      font-size: 0.1212rem;
    }
  }

  // streamer
  .streamer {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #058580, #1289a7) left top no-repeat,
      linear-gradient(to bottom, #058580, #1289a7) left top no-repeat,
      linear-gradient(to left, #058580, #1289a7) right top no-repeat,
      linear-gradient(to bottom, #058580, #1289a7) right top no-repeat,
      linear-gradient(to left, #058580, #1289a7) left bottom no-repeat,
      linear-gradient(to bottom, #058580, #1289a7) left bottom no-repeat,
      linear-gradient(to left, #058580, #1289a7) right bottom no-repeat,
      linear-gradient(to left, #058580, #1289a7) right bottom no-repeat;
    background-size: 2px 10px, 10px 1px, 1px 10px, 10px 1px;
  }
  .streamer .line {
    width: 100%;
    position: absolute;
    height: calc(100% - 2px);
    background: linear-gradient(
      180deg,
      rgba(18, 170, 48, 0) 43%,
      rgb(15, 15, 15) 211%
    );
    transform: translateY(-100%);
    animation: radar-beam 2s infinite;
    transition: all 1s linear;
    border-bottom: 1px solid #0abde3;
    animation-timing-function: cubic-bezier(0.53, 0.43, 0.99);
    animation-delay: 1.7s;
  }
  @keyframes radar-beam {
    from {
      top: 0px;
    }
    to {
      top: 100%;
    }
  }
  .streamer::before,
  .streamer::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    // border-top-width: 5px;
    border: 1px solid #005260;
    border-image: linear-gradient(#00cec9, #74b9ff, #00b894) 30 30;
    transition: all 0.5s;
    animation: clippath 3s infinite linear;
  }
  .streamer::after {
    animation: clippath 3s infinite -1.5s linear;
  }

  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }
    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
  }

  .flex-box{
   width:20%;
    height: 86%;
    margin: 0;
    min-height:86%;
    position: relative;
    left: 20%;
    top: -86%;
      .mains {
    width: 0.4044rem;
    height:0.4044rem;
    display: flex;
    text-align: center;
    // position: relative;
    // margin: 0 auto;
    position: absolute;
    top: 1rem;
    left: 22.5%;
    #carte {
      width: 2.1vw;
      height: 3.7vh;
    }
  }
}
  .font {
    color: #fff;
    font-size: 0.1414rem;
    position: absolute;
    // left: 37.1%;
    top: 10.5vh;
    left: 23.5%;
    text-align: center;
  }

.three{
    width: 20.6%;
  height: 55.9%;
  //  margin-left: 4.2vh;
    img{
      width: 100%;
      height: 100%;
    }
    
  
}

  .number {
    position: absolute;
    left: 61.84%;
    top: -16.1%;
    width: 1.9vw;
    height: 3.3vh;
     img { width: auto; max-width: 100%; }
  }
  .fonts {
    position: absolute;
    top: 27%;
    left: 74.88%;
    // width: 5.2vw;
    // width: auto;
    font-size: 0.1212rem;
    color: #fff;
  }

  .fontss {
    position: absolute;
    top: 60%;
    left: 74.88%;
    // width: 5.2vw;
    // width: auto;
    font-size: 0.1212rem;
    color: #fff;
  }
  .counts {
    position: absolute;
    top: 73%;
    left: 74.88%;
    font-size: 0.1212rem;
    color: #fff;
  }
  .count {
    position: absolute;
    top: 39%;
    left: 74.88%;
    // width: 5.2vw;
    // width: auto;
    font-size: 0.1212rem;
    color: #fff;
  }
  .numbers {
    position: absolute;
    left: 61.84%;
    top: 16.42%;
    width: 1.9vw;
    height: 3.3vh;
  }
  .imgage {
    position: absolute;
    left: 1%;
    top: 15.37%;
    z-index: 1;
    width: auto;
    height: 50.9%;
  }
    img { width: auto; max-width: 100%; }
}


</style>