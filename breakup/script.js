// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.careerForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.careerForm.sigName.value;
      const timeTogether = document.careerForm.timeTogether.value;
      const soChar = document.careerForm.soChar.value;
      const objectsLike = document.careerForm.objectsLike.value;
      const makingOut = document.careerForm.makingOut.value;
      const hobbiesLike = document.careerForm.hobbiesLike.value;
      const sex = document.careerForm.sex.value;
      const number = document.careerForm.number.value;
      const myDream = document.careerForm.myDream.value;
      const publish = document.careerForm.publish.value;
      const myName = document.careerForm.myName.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML = "Greetings " + sigName + ",";
      message1.innerHTML = "Let me start by saying, I have enjoyed the past " + timeTogether + " spending time with you. I find your " + soChar + " charming. However, I'm just not quite sure that I have the capacity for a relationship at this moment.";
      message2.innerHTML = "You probably have not noticed, but I’ve been distant lately. Whenever i’m with you, all I seem able to think about is " +  objectsLike + ". I feel the need to disclose that my mind constantly dwells on other entities, such as " + hobbiesLike + ". I do not feel it is fair to subject a partner to this type of neglect.";
      message3.innerHTML = "I concluded that I must end relations between us recently when we were " + makingOut + "-ing. I realized that I do not enjoy " + sex + " with people other than myself. It has taken me " + number + " years to determine the validity of this, but I'd like to thank you for inspiring me to finally realize it.";
      message4.innerHTML = "I look forward now to a life soly focused on exclusively myself and my work. I plan on pursuing my goal of becoming a " + myDream + ", publishing a" + publish + " about my experience, and reaching pivotal benchmarks alone. I wish you the very best in your future endeavors as well." ;
      message5.innerHTML = "Regards," + myName ;

      return false;
    } // processForm()
}); // DOMContentLoaded