<template>
  <div class='nav-bar'>
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>


<style scoped>

.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow:0px 2px 1px rgba(6, 255, 255, 0.2);
}

.left,.right{
  width: 60px;
}

.center{
  flex: 1;

}

</style>
