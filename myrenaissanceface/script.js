function randomImg(){
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var imgName = "img_" + randomNumber;
    document.getElementById("face").src =  +"faces/" + imgName + ".jpg";
}