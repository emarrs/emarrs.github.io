// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.gothForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.gothForm.sigName.value;
      const timeTogether = document.gothForm.timeTogether.value;
      const number = document.gothForm.number.value;
      const time = document.gothForm.timeUnit.value;
      const activity = document.gothForm.activity.value;
      const pet = document.gothForm.pet.value;
      const clothing = document.gothForm.clothing.value;
      const food = document.gothForm.food.value;
      const greeting = document.gothForm.greeting.value;
      const posession = document.gothForm.posession.value;
      const soHobby = document.gothForm.soHobby.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "let me start by saying, the past" + timeTogether + " has been amazing—i love your . " + " i've been thinking about this for " + number + " " + time + ".";
      message2.innerHTML = "i don't like " + activity + " with u and u don't like " + pet + " and ur " + clothing + " always smells like " + food + ". also, " + soHobby + " is for nerds. " + "don't even say " + greeting + " the next time I see u - I just want my " + posession + " back.";
      message3.innerHTML = "i'm breaking up w u btw";

      return false;
    } // processForm()
}); // DOMContentLoaded