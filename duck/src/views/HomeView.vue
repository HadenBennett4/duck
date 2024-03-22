<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <main>
      <nav>
        <router-link class="link" :to="{hash: '#home'}">Home</router-link>
        <router-link class="link" :to="{hash: '#portfolio'}">Portfolio</router-link>
        <router-link class="link" :to="{hash: '#testimonials'}">Testimonials</router-link>
        <router-link class="link" :to="{hash: '#pricing'}">Pricing</router-link>
        <router-link class="link" :to="{hash: '#about'}">About</router-link>
        <router-link class="link" :to="{hash: '#contact'}">Contact</router-link>
      </nav>


  <div class="building1"></div>
  <div class="building2"></div>
  <div class="building3"></div>
  <div class="building4"></div>
  <div class="building5"></div>
  <div class="building6"></div>
  <div class="building7"></div>
  <div class="building8"></div>

  <div class="header-text" >Duckweed<br> Marketing</div>
  <div class="bill-board">Get your big titty ogth bitch here</div>
  <div class="sun"></div>
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
.bill-board{
  position: absolute;
  background-color: brown;
  border:2px solid white;
  width: 42%;
  height: 40%;
  left: 55%;
  top: 5%;
}
.header-text{
  font-size: 70px;
  position:absolute;
  left: 8%;
  top:10%;
}
nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1em;
  margin-right: 1em;
} 
.link{
  font-size: 15px;
}
.sun{
  position: absolute;
  background-color: yellowgreen;
  width: 10%;
  height: 10%;
  left: 0;
  top: 0;
}


</style>
