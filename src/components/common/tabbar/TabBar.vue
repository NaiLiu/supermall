<template>
    <div id='tab-bar'>
   <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#tab-bar{
  display:flex;
  background-color: #f4f4f4;

  position: fixed;
  left:0;
  right:0;
  bottom: 0;

  box-shadow:0px -2px 1px rgba(6, 255, 255, 0.2);
}




</style>
