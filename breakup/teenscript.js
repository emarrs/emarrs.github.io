// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.teenForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.teenForm.sigName.value;
      const timeTogether = document.teenForm.timeTogether.value;
      const soChar = document.teenForm.soChar.value;
      const objectsLike = document.teenForm.objectsLike.value;
      const hobbiesLike = document.teenForm.hobbiesLike.value;
      const atSchool = document.teenForm.atSchool.value;
      const teacherName = document.teenForm.teacherName.value;
      const girlName = document.teenForm.girlName.value;
      const myName = document.teenForm.myName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');

      soPhone.innerHTML = "lol.. hey " + sigName + "~";
      message1.innerHTML = "so ik weve been like together -i guess??-- for " + timeTogether + " now, and its been great! it's so fun hangin w u  and i think ur " + soChar + " is great hehee  but i think we maybe should stop going out. i gota be honest lol the other day i litrally hid under the " + atSchool + " the other day during 8th free 2 avoid u lmao..";
      message2.innerHTML = "like uve been wanting to hangout like .. all the time lol .but tbh  im kinda busy with all my " + hobbiesLike + " n stuff. LOL tbh im more interested in " +  objectsLike + " not 2 be rudee or anything wer still gunna b 4th period geometry homiez !!! lmao " + teacherName + "amirite!?!?  xO";
      message3.innerHTML = "anyway lol awk! see u at " + girlName + "'s pool party saturday!?";
      message3.innerHTML = myName;

      return false;
    } // processForm()
}); // DOMContentLoaded