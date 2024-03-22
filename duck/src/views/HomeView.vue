<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <main>
    <header>
      <nav>
        <router-link :to="{hash: '#home'}">Home</router-link>
        <router-link :to="{hash: '#about'}">About</router-link>
      </nav>
  </header>


  <div class="building1"></div>
  <div class="building2"></div>
  <div class="building3"></div>
  <div class="building4"></div>
  <div class="building5"></div>
  <div class="building6"></div>
  <div class="building7"></div>
  <div class="building8"></div>

    This is the home page
  </main>
</template>

<style scoped>
main{
  width: 100%;
  background-color: aqua;
  min-height: 100vh;
  position: relative;
}
.building1{
  background-color: green;
  width: 12%;
  height: 55%;
  position: absolute;
  bottom: 0;
}
.building2{
  background-color: blue;
  width: 20%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 10%;
}
.building3{
  background-color:aquamarine;
  width: 10%;
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 24%;
}
.building4{
 background-color:red; 
 width: 10%;
  height: 35%;
  position: absolute;
  bottom: 0;
  left:33%;
  z-index: 1;
}
.building5{
  background-color:chartreuse;
  width: 25%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left:40%;
}
.building6{
  background-color:yellow;
  width: 22%;
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 55%;
  z-index: 1;
}
.building7{
  background-color:violet;
  width: 20%;
  height: 48%;
  position: absolute;
  bottom: 0;
  left:70%;
}
.building8{
  background-color:orange;
  width: 15%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left:85%;
  z-index: 1;
}

</style>
