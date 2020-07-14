<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommends-tiem">
      <a :href="item.link"></a>
      <img :src="item.image">
      <div>{{item.title}}</div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'RecommendView',
  components: {

  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  
  padding:10px 0 20px;
  border-bottom:8px solid #eee;
}

.recommends-tiem{
  flex: 1;
}

.recommends-tiem img{
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
}


</style>