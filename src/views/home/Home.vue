<template>

  <div id='home'>
    <NavBar class="homenav"><div slot="center">购物城</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>

</template>

<script>
// @ is an alias to /src

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from 'network/home'


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return{
      message:'AAAA',
      banners:[],
      recommends:[]
    }
  },
  created () {
    // 首页创建完毕就要发送网络请求
    // 所以需要生命周期函数
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      console.log(res)
      this.banners=res.data.banner.list;
       this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.homenav{
  background-color:var(--color-tint);
  color:white
}
</style>