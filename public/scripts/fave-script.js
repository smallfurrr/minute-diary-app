const url =  "img/empty-heart.png";
const url2 = "img/filled-heart.png";

let hearts = document.querySelectorAll(".heart-button");
//returns an array

hearts.forEach((heart) => {
    heart.addEventListener("click", function() {
        console.log("YEAHHHH");

        let imgSource = heart.getAttribute('src');
         console.log(imgSource);

         if (imgSource === url) {
            heart.setAttribute('src', url2);
         } else if (imgSource === url2) {
            heart.setAttribute('src', url);
         }
    });
});