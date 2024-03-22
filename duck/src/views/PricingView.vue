<template>
    <div class="pricing">
      <h1>Our Pricing</h1>
      <box>
        <box1>
          <h2>E-COMMERCE</h2>
          <h2-1>STARTING AT<br><span>$8K</span></h2-1>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
        </box1>
        <box2>
          <h3>E-COMMERCE</h3>
          <h2-1>5 PAGES<br><span>$150</span></h2-1>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
        </box2>
        <box3>
          <h2>E-COMMERCE</h2>
          <h2-1>STARTING AT<br><span>$8K</span></h2-1>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
          <p><img class="checkmark" src="/src/assets/checkmark.svg" alt=""><h2-2> $8000 minimum up front cost</h2-2></p>
        </box3>
      </box>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .pricing {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    h1 {
      font-size: 70px;
    }
    box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    box1, box3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 20vw;
      height: 70vh;
      border: 1px solid black;
      transition:transform .5s ease, box-shadow .5s ease;
      background-color: white;
    }
    box1:hover{
     transform:translateX(-15px);
     box-shadow: 0px 10px 10px rgb(0,0,0,.5);
    }
    box3:hover{
     transform:translateX(15px);
     box-shadow: 0px 10px 10px rgb(0,0,0,.5);
    }
    h2 {
      width: 100%;
      font-size: 40px;
      background-color: aqua;
      margin-top: 0;
      padding: 5% 0;
    }
    h2-1 {
      font-size: 25px;
    }
    span {
      font-size: 50px;
    }
    h2-2 {
      font-size: 25px;
      width: 80%;
      text-align: start;
    }
    p {
      display: flex;
      flex-direction: row;
      width: 90%;
    }
    box2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 20vw;
      height: 75vh;
      border: 1px solid black;
      box-shadow: 0 0 10px rgba(87, 161, 196, 0.6);
      transition: transform .5s ease, box-shadow .5s ease;
      z-index: 5;
      background-color: white;
    }
    box2:hover{
      transform: scale(1.05);
      box-shadow: 0px 10px 10px rgb(0,0,0,.5);
}
    h3 {
      width: 100%;
      font-size: 40px;
      background-color: aqua;
      margin-top: 0;
      padding: 5% 0;
    }
    .checkmark {
      height: 30px;
      width: auto;
      padding-right: 5%;
    }
  }
  </style>
  