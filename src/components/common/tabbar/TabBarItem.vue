<template>
    <div class='tab-bar-item' @click="itemClick">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :style="activeStyle">
      <slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
      path:String,
      activeColor:{
        type:String,
        defult:'skyblue'
      }
  },
  data(){
   return {
    //  isActive:true
   }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
       this.$router.push(this.path)
       //console.log("++++++++++")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

.active{
  color:skyblue;
}


</style>
