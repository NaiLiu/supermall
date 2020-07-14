<template>

    <swiper>
      <swiper-item v-for="item in banners" :key='item.index'>
       <a :href="item.link"></a>
       <img :src="item.image" alt="">
      </swiper-item>
    </swiper>

</template>

<script>
// @ is an alias to /src

import {getHomeMultidata} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>

</style>