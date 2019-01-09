// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.mainForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.mainForm.sigName.value;
      const timeTogether = document.mainForm.timeTogether.value;
      const number = document.mainForm.number.value;
      const time = document.mainForm.timeUnit.value;
      const activity = document.mainForm.activity.value;
      const pet = document.mainForm.pet.value;
      const clothing = document.mainForm.clothing.value;
      const food = document.mainForm.food.value;
      const greeting = document.mainForm.greeting.value;
      const posession = document.mainForm.posession.value;
      const soHobby = document.mainForm.soHobby.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "let me start by saying, the past" + timeTogether + ". " + " i've been thinking about this for " + number + " " + time + ".";
      message2.innerHTML = "i don't like " + activity + " with u and u don't like " + pet + " and ur " + clothing + " always smells like " + food + ". also, " + soHobby + " is for nerds. " + "don't even say " + greeting + " the next time I see u - I just want my " + posession + " back.";
      message3.innerHTML = "i'm breaking up w u btw";

      return false;
    } // processForm()
}); // DOMContentLoaded