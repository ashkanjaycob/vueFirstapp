<template>
  <div>
      <HeaderBoot />
      <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderBoot from './components/HeaderBoot.vue'

export default {
  name: 'App' , 
  components:{
    HeaderBoot 
  }
}
</script>

<style>



</style>
