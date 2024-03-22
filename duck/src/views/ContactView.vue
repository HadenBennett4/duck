<script>
const WEB3FORMS_ACCESS_KEY = "c91cde67-4a93-4ee4-a265-ec5839cf1720";
import { defineComponent } from 'vue';

export default defineComponent( {
    data() {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
        successMessage: "Success! Your message has been sent. We will reach back in 1-2 business days.",
        showMessage: false,
      };
    },

    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
        if (this.name === '' || this.email === '') {
        alert('Please fill out all required fields.');
      } else {
        this.showMessage=true;
        this.name='';
        this.email='';
        this.subject='';
        this.message='';
      }
    }
      },
      showSuccessMessage() {
      this.showMessage=true;
    }
});
</script>

<template>
    <div class="contact">
      <form-container>
        <form @submit.prevent="submitForm">
            <p>How Can We Help?</p>
            <form-container-1>
                <form-container-child><tit><input type="text" name="name" v-model="name" input class="input" placeholder="Name" required/></tit></form-container-child>
                <form-container-child><tit><input type="email" name="email" v-model="email" input class="input" placeholder="Email" required/></tit></form-container-child>
            </form-container-1>
            <message-container><tit><textarea name="message" v-model="message" textarea class="message-in" placeholder="Message" required></textarea></tit></message-container>
            <button class="submit-button" type="submit" @click="showSuccessMessage">Send</button>
            <div v-if="showMessage" class="success-message">{{ successMessage }}</div>
        </form>
      </form-container>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .contact {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    p {
      font-size: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: auto;
      z-index: 5;
      margin-top: 5%;
      padding-bottom: 5%;
    }
    form-container-1 {
      display: flex;
      flex-direction: column;
    }
    form-container-child{
      width: 100%;
      height: 30%;
      margin-bottom: 2%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    tit{
      font-size: 20px;
      color:#2c3d57;
      font-weight: bold;
      width: 25%;
      height: 48%;
    }

    input{
      font-size: 17px;
      color:#2c3d57;
      width: 375%;
      min-height: 40px;
      border-style: solid;
      border-color:#1381db55;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: start;
      background-color: white;
      margin-left: 11px;
    }
    .message-in{
      width: 375%;
      height: 20vh;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      border-style: solid;
      border-width: 2px;
      border-color:#1381db55;
      border-radius: 5px;
      font-size: 20px;
      font-family: 'Your Desired Font', 'Times New Roman', Times, serif;
      background-color: white;
      margin-left: 11px;
    }
    form-container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      z-index: 5;
      width: 100%;
    }
    subject-container{
      width: 100%;
      height: 12%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: left;
      align-items: left;   
    }

    message-container{
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      margin-top: 3%;
      margin-bottom: 3%;
    }

    .submit-button{
      width: 40%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0E78AA;
      border-radius: 20px;
      margin-left: 11px;
    }
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size:25px;
      color:white;
      border: none;
    }
    .submit-button:hover{
      opacity: .5;
    }

    input:invalid {
      border: 2px solid red;
    }
    textarea:invalid {
      border: 2px solid red;
    }
    }
  </style>
  