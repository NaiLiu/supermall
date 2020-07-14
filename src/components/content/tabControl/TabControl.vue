<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"  :key="index"
     class="tab-controlitem" :class="{active:index==currentIndex}"
     @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'TabConrol',
  components: {

  },
  props:{
   titles:{
     type:Array,
     default(){
       return []
     }
   }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index)
    {
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}

.tab-controlitem{
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-controlitem span{
  padding: 5px;
}

.active{
  color:var(--color-high-text);
 
}

.active span{
   border-bottom: 2px solid var(--color-tint);
}
</style>