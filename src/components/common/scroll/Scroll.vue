<template>
  <div class="wrapper" ref="wrapper">
    <div class='content'>
       <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
	export default {
    name: "Scroll",
    props: {
      probeType:{
        type:Number,
        default:0
      },
      pullUpload:{
        type:Boolean,
        default:false
      }
    },
    data () {
      return {
        scroll:null
      }
    },
    mounted () {
      // 创建BScroll对象
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpload
      })
      
      if(this.probeType==2||this.probeType==3){
        // 监听滚动位置
        this.scroll.on('scroll',(position)=>{
      //  console.log(position)
      // 自定义发送事件
      this.$emit('scroll',position)
       })
      }
      // this.scroll.refresh()
      // 监听上拉事件  
    

       if(this.pullUpload){
       
        this.scroll.on('pullingUp',()=>{
             // 监听到滚动到底部
            // console.log('上拉加载更多')
            this.$emit("pullingUp")
          })
      }
      // this.scroll.scrollTo(0,0)
    },
    methods: {
      scrollTo(x,y,time=500){
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
         console.log('------')
      }
    }
	}
</script>

<style scoped>

</style>
