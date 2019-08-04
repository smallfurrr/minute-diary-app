const url =  "img/empty-heart.png";
const url2 = "img/filled-heart.png";

let hearts = document.querySelectorAll(".heart-button");
//returns an array

let pressHeart = (podcastId) => {

    let request = new XMLHttpRequest();
    let url = "/faves";

    request.addEventListener("load", function(){
        if(this.status === 200){
        console.log("woo works")
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

        let imgSource = heart.getAttribute('src');
        let podcastId = heart.getAttribute('value');

         if (imgSource === url) {
            heart.setAttribute('src', url2);
            pressHeart(podcastId);
         } else if (imgSource === url2) {
            heart.setAttribute('src', url);
            pressHeart(podcastId);
         }
    });
});