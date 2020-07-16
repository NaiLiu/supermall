<template>
<div class="detail-swiper">
<swiper  class="swiper1">
  <SwiperItem v-for="item in topImages" :key="item.index">
    <img :src="item" alt="">
 </SwiperItem>
</swiper>

</div>

</template>



<script>
// @ is an alias to /src
import {Swiper,SwiperItem} from 'components/common/swiper'


export default {
  name: "DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
 },
 components: {
   Swiper,
   SwiperItem
 }
}
</script>

<style scoped>
.swiper1{
  height: 300px;
  overflow: hidden;
}


</style>