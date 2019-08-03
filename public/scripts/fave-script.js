const url =  "img/empty-heart.png";
const url2 = "img/filled-heart.png";

let hearts = document.querySelectorAll(".heart-button");
//returns an array

//im not sure what parameter this needs..
let smashThatMfLikeButton = (podcastId) => {
    // console.log("BUTTON SMASHED")
    // console.log(podcastId);

    let request = new XMLHttpRequest();
    let url = "/faves";

    request.addEventListener("load", function(){
        if(this.status === 200){
        console.log("uhhh works?")
         }else{
        console.log("error");
        }
    });

    request.open("POST", url);

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let data = {
        "podcastId": podcastId
    }

    request.send(JSON.stringify(data));
}

hearts.forEach((heart) => {
    heart.addEventListener("click", function() {
        // console.log("YEAHHHH");

        let imgSource = heart.getAttribute('src');
        let podcastId = heart.getAttribute('value');
        // console.log(podcastId);

         if (imgSource === url) {
            heart.setAttribute('src', url2);
            smashThatMfLikeButton(podcastId);
            //add function here for ajax?
         } else if (imgSource === url2) {
            heart.setAttribute('src', url);
            //add function here for ajax?
         }
    });
});