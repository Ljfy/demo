<template>
  <div class="flex">
    <div class="title">
      <span>车辆布控实时分析</span>
      <div class="line"></div>
    </div>

    <div class="box">
      <div class="one">
        <img src="../assets/img/2.jpg" alt="" />
      </div>
      <div class="item2 one"></div>
      <div class="item3 one">
        <img src="../assets/img/2.jpg" alt="" />
      </div>
      <div class="item4 one">
           <div class="wrap active">
    <img src="../assets/img/anomalies/今日识别人数icon@2x.png" alt="">
    <span>布控数量<br>0个.</span>
</div>
   <div class="wrap">
    <img src="../assets/img/anomalies/今日识别人数icon@2x.png" alt="">
    <span>今日识别车辆<br>0个.</span>
</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex {
  position: absolute;
  width: 310px;
  // display: flex;
  height: 152px;
  // display: inline-block;
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
      .wrap {
/* 可无需设置高度，靠图片高度 或者 文字的上下padding撑开高度 */
    // border: 1px solid;
    width:106%;
  
}
.wrap span{
    display: inline-block;
    vertical-align: middle;
    padding: 10px 0; /* 撑开高度 */
}
.wrap img{
    width:30%;
    height: auto;
    vertical-align: middle;
}
}
.box {
  width: 100%;
  display: flex;
  height: 100%;
  .one {
    // flex: 1;
    width: 20.6%;
    height: 55.9%;
   
  }
  .one:last-child {
    width: 45%;
    height: 55.9%;
  }
  img {
    width: 100%;
    height: 100%;
  }

.active{
  margin-bottom: 20px;
}


}

</style>
