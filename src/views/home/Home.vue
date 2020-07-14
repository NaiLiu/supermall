<template>

  <div id='home'>
    <NavBar class="homenav"><div slot="center">购物城</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl class="tabControl" :titles="['流行','新款','精选']"></TabControl>
    <GoodList :goods="goods['pop'].list">  </GoodList>
    <ul>
        <li>1</li>
          <li>1</li>
            <li>1</li>
              <li>1</li>
                <li>1</li>
                  <li>1</li>
                    <li>1</li>
                      <li>1</li>
                        <li>1</li>
                          <li>1</li>
                            <li>1</li>
                            <li>1</li>
          <li>1</li>
            <li>1</li>
              <li>1</li>
                <li>1</li>
                  <li>1</li>
                    <li>1</li>
                      <li>1</li>
                        <li>1</li>
                          <li>1</li>
                            <li>1</li>
                            <li>1</li>
          <li>1</li>
            <li>1</li>
              <li>1</li>
                <li>1</li>
                  <li>1</li>
                    <li>1</li>
                      <li>1</li>
                        <li>1</li>
                          <li>1</li>
                            <li>1</li>

    </ul>
  </div>

</template>

<script>
// @ is an alias to /src

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'




import {getHomeMultidata} from 'network/home'
import {getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodList,

    HomeSwiper,
    RecommendView,
    FeatureView,
    
  },
  data(){
    return{
      message:'AAAA',
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  created () {
    // 首页创建完毕就要发送网络请求
    // 所以需要生命周期函数
    // 1.请求多个数据
    this.getHomeMultidata(),
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods: {
    // 1.请求多个数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{    
      // console.log(res) 
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
    const page=this.goods[type].page+1
    getHomeGoods(type,page).then(res=>{
      
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page+=1
    })
  }
  }
 
}
</script>

<style scoped>
#home{
  /* 导航遮盖banner问题 */
  padding-top:44px;
}

.homenav{

  background-color:var(--color-tint);
  color:white;

/* 设置顶部导航位置固定 */
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9;
  

}

.tabControl{
  position: sticky;
  top:44px;
  z-index: 9;
}
</style>