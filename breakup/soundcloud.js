// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.soundcloudForm.onsubmit = processForm;

    function processForm() {
      const sigName = document.soundcloudForm.sigName.value;
      const timeTogether = document.soundcloudForm.timeTogether.value;
      const objectsLike = document.soundcloudForm.objectsLike.value;
      const hobbiesLike = document.soundcloudForm.hobbiesLike.value;
      const followCount = document.soundcloudForm.followCount.value;
      const sound = document.soundcloudForm.sound.value;
      const drinkName = document.soundcloudForm.drinkName.value;
      const letters = document.soundcloudForm.letters.value;
      const gunNoise = document.soundcloudForm.gunNoise.value;
      const sound2 = document.soundcloudForm.sound2.value;
      const metalBand = document.soundcloudForm.metalBand.value;
      const product = document.soundcloudForm.product.value;
      const sadSynonym = document.soundcloudForm.sadSynonym.value;
      const objectName = document.soundcloudForm.objectName.value;
      const adjective = document.soundcloudForm.adjective.value;
      const drugName = document.soundcloudForm.drugName.value;
      const noun = document.soundcloudForm.noun.value;

      const soPhone = document.getElementById('soPhone');
      const message1 = document.getElementById('message1');
      const message2 = document.getElementById('message2');
      const message3 = document.getElementById('message3');
      const message4 = document.getElementById('message4');
      const message5 = document.getElementById('message5');

      soPhone.innerHTML = "yooo" + sigName + "sup boo,";
      message1.innerHTML = "ay, let me just say its been wavvy vibing w u these last " + timeTogether + ". think its time i stop fuckin w u tho tbh.";
      message2.innerHTML = "baby i just have mad shit on my mind lately like " +  objectsLike + " i jus dont know if i feel artistically inspired enough. mhmsmmi thinki rly gotta b focusing putting my mind to " + hobbiesLike + " more, so i can get up to " + followCount + "K by the end of the year eyy yfm? eskettit";
      message3.innerHTML = "u evr sipped summ dirrty " + drinkName + " n start realizng shit?" + sound + letters + " yah yah yah yah " + gunNoise;
      message4.innerHTML = "look im real sorry prolly breakin this bish heart all over the place but u know i ben thinking, " + sound2 + " the other day when i showed u my new logo n u said it looks like the " + metalBand + " font n asked if imma start recording heavy metal rock bitch the fuck. trust no one. snakes in the grass. im not bout to date for a while til i find a shawty that let me use her " + product + " and u never let me do that." ;
      message5.innerHTML = "ey peace out tho foolie, much luv n make sure u tell everyone abt my new mixtape, " + sadSynonym + objectName + "Dayz, out now on soundcould!!eskettiti! love, Lil " + adjective + drugName + noun;

      return false;
    } // processForm()
}); // DOMContentLoaded