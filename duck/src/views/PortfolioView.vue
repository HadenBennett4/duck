<template>
    <div class="portfolio">
      <h>Portfolio</h>
      <div class="back-button"><</div>
      <div class="next-button">></div>
      <div class="container">
        <div class="project-box"></div>
        <div class="project-box"></div>
        <div class="project-box"></div>
        <div class="project-box"></div>
        <div class="project-box"></div>
        <div class="project-box"></div>
      </div>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .portfolio {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
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
      width: 100%;
      height: 60%;
      background-color: aqua;
      grid-template-columns: repeat(6, 1fr);
      position: absolute;
    }
    .project-box{
      background-color: aquamarine;
    }
  }
  </style>
  