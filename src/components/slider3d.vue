<template>
  <div class="banner_box">
      <!-- 轮播图区域 -->
      <div class="wrapper">
        <div class="slider">
          <img src="../assets/img/anomalies/组 53649@2x.png" alt />
        </div>
        <div class="info">2</div>
        </div>
  </div>
</template>

<script>
  export default {
    props:{
      source:{
        type:Array,
        require:true
      },
      initial:{
        type:Number,
        require:true
      },
      interval:{
        type:Number,
        default:2000
      }
    },
    mounted(){
      let _this = this;
      //1 处理source
      let source = _this._props.source;
     let diff = source.length - 3
     diff = Math.abs(diff)
     source.slice(0,diff).forEach(item => {
       source.push({...item},)
     });
      console.log(diff);

      console.log(source);
    },
    // computed:{
    //   slider(initial,source){
    //     let len = source.length,
    //     temp1 = initial -2,
    //     temp2 = initial -1,
    //     temp3 = initial ,
    //     // temp1 = 

    //   }
    // } 

  }
</script>

<style lang="scss" scoped>
 .banner_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      .wrapper {
        position: relative;
        height: 100%;
        .slider {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 0;
          overflow: hidden;
          transform: translate(-50%,-50%);
          box-sizing: border-box;
          width: 65%;
          height: 100%;
          transition: .5s;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .info{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%)
        }
      }
    }
</style>