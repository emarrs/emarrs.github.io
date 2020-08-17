// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.gothForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.gothForm.sigName.value;
      const timeTogether = document.gothForm.timeTogether.value;
      const soChar = document.gothForm.soChar.value;
      const objectsLike = document.gothForm.objectsLike.value;
      const emoSong = document.gothForm.emoSong.value;
      const hobbiesLike = document.gothForm.hobbiesLike.value;
      const gmaName = document.gothForm.gmaName.value;
      const street = document.gothForm.street.value;
      const sweet = document.gothForm.sweet.value;
      const myName = document.gothForm.myName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "let me start by saying, i did not hate the " + timeTogether + " we have spent together—i guess i enjoy your " + soChar + ", but something is wrong.";
      message2.innerHTML = "you may have noticed i’ve been extra distant lately. whenever i’m with you, all i can think about is " +  objectsLike + ", and you don't deserve that. how can i give you attention when my mind is constantly drifting to " + hobbiesLike + "?";
      message3.innerHTML = "i knew i had to end things between us the other day, when i was reciting the lyrics to " + emoSong + " but i forgot the words. i knew it was an omen. i am betraying my music-based subculture by not being alone. i can't afford the distraction of a relationship.";
      message4.innerHTML = "i will be withdrawing to the darkness of my " + gmaName + "'s basement on " + street + " for a lengthy, introspective retreat into " + sweet + " torturous loneliness. maybe someday when i arise again to meet the light, we shall meet again." ;
      message5.innerHTML = "farewell," + myName ;

      return false;
    } // processForm()
}); // DOMContentLoaded