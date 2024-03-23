<template>
    <div class="portfolio">
      <h>Portfolio</h>
      <div class="back-button"><</div>
      <v-icon scale="2" aria-hidden="false" fill="red" name="bi-arrow-left-cirlce-fill" class="next-button"></v-icon>
      <div class="container">
        <div class="project-wrapper">
          <div class="project-box"></div>
          <div class="project-box"></div>
          <div class="project-box"></div>
      </div>
      <div class="project-wrapper">
          <div class="project-box"></div>
          <div class="project-box"></div>
          <div class="project-box"></div>
      </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .portfolio {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index:2;
    }
    h{
      font-size: 50px;
    }
    .back-button{
      top: 50%;
      position: absolute;
      left: 1%;
    }
    .next-button{
      top: 50%;
      right: 1%;
      position: absolute;
    }
    .container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 200%;
      height: 60%;
      position: absolute; 
      left: 0;
      overflow-x: hidden;
    }
    .project-wrapper{
      width: 50%;
      height: 70%; 
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    .project-box{
      background-color: bisque;
      width: 28%;
      height: 100%;
    }
  }
  </style>
  