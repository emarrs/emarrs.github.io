// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.techbroForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.techbroForm.sigName.value;
      const timeTogether = document.techbroForm.timeTogether.value;
      const objectsLike = document.techbroForm.objectsLike.value;
      const appIdeas = document.techbroForm.appIdeas.value;
      const hobbiesLike = document.techbroForm.hobbiesLike.value;
      const benderTime = document.techbroForm.benderTime.value;
      const drugName = document.techbroForm.drugName.value;
      const orderProduct = document.techbroForm.orderProduct.value;
      const subTime = document.techbroForm.subTime.value;
      const transport = document.techbroForm.transport.value;
      const animalName = document.techbroForm.animalName.value;
      const myName = document.techbroForm.myName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "the last " + timeTogether + " has been rad. unfortunately though, i think we should stop seeing each other.";
      message2.innerHTML = "it's not you, you're great. but i just cannot get my mind off of " +  objectsLike + " lately. it just stimulates my mind unlike any human ever could. also, i'm just so focused on work. my mind is full of app ideas, like an app that " + appIdeas + ". wouldn't that be sick? also, chilling with you has been really cutting in to my " + hobbiesLike + " time, and my productivity is decreasing.";
      message3.innerHTML = "i knew i had to end things during my " + benderTime + "-long " + drugName + " bender, when i had the idea for an app where you can order " + orderProduct + " delivered to your door " + subTime + " upon subscription. this venture is going to take a lot of focus, and i cannot be tied down on my " + transport + " to success. ";
      message4.innerHTML = "i’m sorry to break your poor human heart. i look forward to seeing your status updates on my " + animalName + "-owner social networking app, " + animalName + "Mommy!" ;
      message5.innerHTML = "tap you later," + myName ;

      return false;
    } // processForm()
}); // DOMContentLoaded