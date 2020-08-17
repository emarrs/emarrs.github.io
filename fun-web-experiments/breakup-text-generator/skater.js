// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.skateForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.skateForm.sigName.value;
      const timeTogether = document.skateForm.timeTogether.value;
      const objectsLike = document.skateForm.objectsLike.value;
      const hobbiesLike = document.skateForm.hobbiesLike.value;
      const videoPlatform = document.skateForm.videoPlatform.value;
      const skateTrick = document.skateForm.skateTrick.value;
      const transport = document.skateForm.transport.value;
      const activityName = document.skateForm.activityName.value;
      const drugName = document.skateForm.drugName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');

      soPhone.innerHTML = "hey " + sigName + " haha";
      message1.innerHTML = "its been cool chilling with u the past " + timeTogether + " but just to be clear we're not exclusive right?";
      message2.innerHTML = "dont get it twisted i fuck w u heavy but i got a lot of other stuff going on im makin music and art and my skate vids r blowin up on " + videoPlatform + ", im tryna start this series where we share the skating adrenaline rush with unsuspecting pedestrians by almost landing my " + skateTrick + " on their head as they walk to work, then we ask them if we can bum a cig LOL--gnar right? anyway i gotta keep the lifestyle straight keep my " +  objectsLike + " consistent for the viewers bro lol, also ngl im mad busy " + hobbiesLike + " u get it right?";
      message3.innerHTML = "anyway i was kinda put off the other day when i ran a red light on my " + transport + " to purposefully get hit by a car and instead of filming it you called 911, i realized u care too much about me and i cant deal w that kind of baggage. i didnt realize youd be so clingy..";
      message4.innerHTML = "hey, take it easy bro ill see u at ur next school function maybe we can link n " + activityName + " together. also please dont take this a reason to stop buying " + drugName + " from me, its me and my guys only income rn n were tryna save enough to move to new york make shit sell some tshirts";

      return false;
    } // processForm()
}); // DOMContentLoaded