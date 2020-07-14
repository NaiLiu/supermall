<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}
      <img src="~assets/img/common/collect.svg">
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

.price::before{
  content: '';
  position:absolute;
  left: -22px;
  top: -2px;
  width: 17px;
  height: 15px;
  background:url('~assets/img/home/Price_bg.svg') 0 0/25px 16px no-repeat;
}

.collect{
    position: relative;
  }
.collect img{
  position:absolute;
  width: 15px;
  height: 15px;
  top: -1px;
  left: 22px;
  }
</style>