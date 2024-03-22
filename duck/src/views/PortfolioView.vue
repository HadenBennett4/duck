<template>
    <div class="portfolio">
      <h>Portfolio</h>
      <div class="back-button"><</div>
      <div class="next-button">></div>
      <div class="container">
        <div class="project-wrapper">
        <div class="project-box">21</div>
        <div class="project-box">h</div>
        <div class="project-box"></div>
      </div>
      </div>
    </div>
  </template>
  
  <style>
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
      display: grid;
      background-color: aqua;
      width: 55em;
      height: 60%;
      grid-template-columns: 1fr 1fr 1fr;
      position: absolute; 
      gap:1em;
      align-items: center;
      justify-content: center;
      overflow-x: scroll;
    }
    .project-box{
      background-color: red;
      height: 70%;
      width: 100%;

    }
  }
  </style>
  