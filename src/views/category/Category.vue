<template>
<div class="wrapper">
  <ul class="content">
      <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>

           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
           <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>

       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>

  </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import BScroll from 'better-scroll'
export default {
  name: 'Category',
  components: {
    
  },
  data () {
    return {
      scroll:{

      }
    }
  },
  mounted () {
     this.scroll=new BScroll(document.querySelector('.wrapper'),{
       probeType:3,
       pullUpLoad:true
     })

     this.scroll.on('scroll',(position)=>{
       console.log(position)
     })

     this.scroll.on('pullingUp',()=>{
       console.log('上拉加载更多')
     })
  }
}
</script>

<style scoped>
  .wrapper{
    height:150px;
    background-color:red;
  }
</style>