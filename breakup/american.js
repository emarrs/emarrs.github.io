// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.americanForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.americanForm.sigName.value;
      const timeTogether = document.americanForm.timeTogether.value;
      const objectsLike = document.americanForm.objectsLike.value;
      const usState = document.americanForm.usState.value;
      const hobbiesLike = document.americanForm.hobbiesLike.value;
      const americanThing = document.americanForm.americanThing.value;
      const leisure = document.americanForm.leisure.value;
      const bookName = document.americanForm.bookName.value;
      const datePlace = document.americanForm.datePlace.value;
      const gay = document.americanForm.gay.value;
      const kissPlace = document.americanForm.kissPlace.value;
      const gross = document.americanForm.gross.value;
      const drinkName = document.americanForm.drinkName.value;
      const objectName = document.americanForm.objectName.value;
      const cityName = document.americanForm.cityName.value;
      const gmaName = document.americanForm.gmaName.value;
      const yourName = document.americanForm.yourName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML ="Howdy " + sigName + ",";
      message1.innerHTML = "I was enjoying the last " + timeTogether + " with you. However, I think I may be just too Proudly American to be in a relationship with you anymore.";
      message2.innerHTML = "I thought we were two peas in a damn South " + usState + "ian Sweet Green Pea Pod, but I am afraid you do not share my love for " +  objectsLike + " at an adequate level. Do you even know what a " + americanThing + " is? Do you love to " + hobbiesLike + " as much as I do?";
      message3.innerHTML = "The other day, when I was " + leisure + " and reading my favorite book, " + bookName + ", I realized something. I should've ended things last week when we were at the " + datePlace + " and saw two " + gay + " kissin' on the " + kissPlace + " and you didn't call out their " + gross + " public display of fascist cultural Marxism.";
      message4.innerHTML = "Another red flag was when I threw up " + drinkName + " on my favorite " + objectName + " but you were too grossed out to wash it and I realized that I like the fact that you do my laundry for me more than I like you. I think I'll be off to " + cityName + "to move back in with my " + gmaName + " since this place sucks and I can't get a damn job here anyway.";
      message5.innerHTML = "Peace out loser, " + yourName + "." ;

      return false;
    } // processForm()
}); // DOMContentLoaded