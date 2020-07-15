<template>

  <div id='home'>
    <NavBar class="homenav"><div slot="center">购物城</div></NavBar>
     <TabControl :titles="['流行','新款','精选']"
     @tabClick="tabClick" ref="tabControl1" class='tab-control' v-show="isTabFixed"></TabControl>
  <scroll class="content" ref="scroll" :probeType="3" 
  @scroll="contentScroll" :pullUpload="true" @pullingUp="loadMore">
    <HomeSwiper :banners="banners" @swpierImageLoad="swpierImageLoad"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']"
     @tabClick="tabClick" ref="tabControl2"></TabControl>
    <GoodList :goods="showGoods">  </GoodList>
    </scroll>
    <BackTop @click.native="backClick" v-show='isShowBackTop'></BackTop>
  </div>

</template>

<script>
// @ is an alias to /src

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import {debounce} from 'common/utils.js'


import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'




import {getHomeMultidata} from 'network/home'
import {getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodList,
    BackTop,

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
      },
      currentType:'pop',
      isShowBackTop:'false',
      tabOffsetTop:0,
      isTabFixed:false
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
  mounted () {
    const refresh=debounce(this.$refs.scroll.refresh,500)
     // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
        // this.$refs.scroll.refresh()
        refresh()
       
    })
    // 获取tabControl的offsetTop
    // tabControl是组件，没有offsetTop属性
    // this.tabOffsetTop=this.$refs.tabControl
   
  },
  computed: {
    showGoods()
    {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // -------事件监听
    tabClick(index){
      // console.log(index)
      switch(index){
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      this.$refs.tabControl1.currentIndex=index,
      this.$refs.tabControl2.currentIndex=index
    },
    // -------网络请求
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

         this.$refs.scroll.finishPullUp()
    })
  },
  backClick(){
    // console.log('backClick')
    this.$refs.scroll.scrollTo(0,0,500)
    // scrollTo(x,y,time)
  },
  contentScroll(position){
    // 监听滚动
    // console.log(position)
    // y值是负值  要转成正值
    this.isShowBackTop=-(position.y)>1000

  //  固定tabControl吸顶
    this.isTabFixed=-(position.y)>this.tabOffsetTop
  },
  loadMore(){
    // 上拉加载更多
    // console.log('上拉加载更多')
    this.getHomeGoods(this.currentType)
  },
  swpierImageLoad(){
    this.tabOffsetTop= this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    // console.log( this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop)
  }
  }
 
}
</script>

<style scoped>
#home{
  /* 导航遮盖banner问题 */
  padding-top:44px;  
  height: 100vh;
  position: relative;
}

.homenav{

  background-color:var(--color-tint);
  color:white;

/* 设置顶部导航位置固定,在使用原生滚动时 */
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9; 
  

}

/* .tabControl{
  position: sticky;
  top:44px;
  z-index: 9;
} */

.content{
  overflow: hidden;

  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  position:absolute;
}
.tab-control{
  position: relative;
  z-index: 9;
}


</style>