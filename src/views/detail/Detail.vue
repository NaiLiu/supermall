<template>
<div id="detail1">
  <!-- 导航栏 -->
  <DetailNavBar class="detail-nav" ></DetailNavBar>
  <scroll class="content" ref="scroll">
  <DetailSwiper :topImages="topImages"></DetailSwiper>
  <DetailBaseInfo :goods="goods"></DetailBaseInfo>
  <DetailShopinfo :shop="shop"></DetailShopinfo>
  <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
  </scroll>
</div>
</template>



<script>
// @ is an alias to /src
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,Goods,Shop} from 'network/detail'
import DetailSwiper from './childComps/DetialSwiper'
import DetailBaseInfo from './childComps/DetailBaseinfo'
import DetailShopinfo from './childComps/DetailShopinfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import Scroll from 'components/common/scroll/Scroll'


export default {
  name: "Detail",
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{}
    }
  },
  created () {
    this.iid=this.$route.params.iid

    // 请求数据
    getDetail(this.iid).then(res=>{
      
      const data=res.result;
      this.topImages=res.result.itemInfo.topImages
      // console.log(this.topImages)
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
     console.log(res)
    //  console.log(this.goods)
    // 请求店铺数据
     this.shop=new Shop(data.shopInfo)
    //  请求商品详情数据
    this.detailInfo=data.detailInfo;
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopinfo,
    DetailGoodsInfo,
    Scroll,
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail1{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content{
  height: calc(100% - 44px);
}

.detail-nav{
  position: relative;;
  background-color: #fff;
  z-index: 9;
}
</style>