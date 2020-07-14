<template>
  <div class="goods">
    <GoodListItem v-for="item in goods" :key="item.index"
     :goods-item="item"
    ></GoodListItem>
  </div>
</template>

<script>
// @ is an alias to /src

import GoodListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
  GoodListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

.goods{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
}


</style>