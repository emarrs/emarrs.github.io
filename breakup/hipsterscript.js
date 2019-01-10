// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.hipsterForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.hipsterForm.sigName.value;
      const timeTogether = document.hipsterForm.timeTogether.value;
      const soChar = document.hipsterForm.soChar.value;
      const objectsLike = document.hipsterForm.objectsLike.value;
      const smthBad = document.hipsterForm.smthBad.value;
      const hobbiesLike = document.hipsterForm.hobbiesLike.value;
      const shape = document.hipsterForm.shape.value;
      const gmaName = document.hipsterForm.gmaName.value;
      const sigBday = document.hipsterForm.sigBday.value;
      const mySign = document.hipsterForm.mySign.value;
      const transport = document.hipsterForm.transport.value;
      const country = document.hipsterForm.country.value;
      const myDream = document.hipsterForm.myDream.value;
      const myName = document.hipsterForm.myName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "let me start by saying, the past " + timeTogether + " has been amazing—i love your " + soChar + ", which is why what i’m about to say may come as a surprise to you.";
      message2.innerHTML = "you may have noticed i’ve been distant lately. whenever i’m with you, all i can think about is " +  objectsLike + ", and that’s just not fair to you. how can i give you the attention you deserve when my mind is constantly wandering to " + hobbiesLike + "?";
      message3.innerHTML = "i knew i had to break up w u the other day, when " + smthBad + " and then i looked up at the sky and saw a " + shape + ". i knew it was an omen. then i remembered something—before my " + gmaName + " died, she told me never to date someone born on " + sigBday + " because their aura would be incompatible with a " + mySign + ". i know in my heart i must respect her dying wish.";
      message4.innerHTML = "i’m leaving soon on a " + transport + " to " + country + " to pursue my dream of " + myDream + "and really find myself along the way. maybe someday our astral forces will collide against the will of the universe and we’ll meet again." ;
      message5.innerHTML = "best," + myName ;

      return false;
    } // processForm()
}); // DOMContentLoaded