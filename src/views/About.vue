<template>
  <div class="scene">
    <slider></slider>
  </div>
</template>

<script>
import slider from "../components/slider.vue"
  export default {
    components:{
      slider
    },
    data(){
      return{
       
      }
    }
  }
</script>

<style lang="scss" scoped>
.scene{
  width: 100%;
  height: 100%;
}
</style>