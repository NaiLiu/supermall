<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}元</span>
      <span class="collect">{{goodsItem.cfav}}收藏
      </span>
      
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'GoodsListItem',
  components: {

  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
      // 使用总线让home监听
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>

<style scoped>

.goodsItem{
  /* padding-bottom:10px; */
  position: relative;
  width: 48%;
}

.goodsItem img{
  width:100%;
  border-radius: 5px;
  }

.goodsInfo{
  padding: 5px;
  text-align: center;
  width: 100%;
  font-size: 5px;
 
}

.goodsInfo p{
  overflow: hidden;
  white-space:nowrap;
  display: block;
  text-overflow:ellipsis;
}

.price{
  color: firebrick;
  margin-right: 20px;
  position: relative;
}



.collect{
    position: relative;
  }

</style>