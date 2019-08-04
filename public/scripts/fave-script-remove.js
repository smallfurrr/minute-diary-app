let hearts = document.querySelectorAll(".heart-button");
let faveContainer = document.getElementById("fave-container");

if (!faveContainer.hasChildNodes()) {
    faveContainer.innerHTML = `<h1>Nothing here, start adding some podcasts!</h1>`
};

let pressHeart = (podcastId) => {

    let request = new XMLHttpRequest();
    let url = "/faves";

    request.open("POST", url);

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let data = {
        "podcastId": podcastId
    }
    request.send(JSON.stringify(data));
}

hearts.forEach((heart) => {
    heart.addEventListener("click", function() {

        let podcastId = heart.getAttribute('value');
        pressHeart(podcastId);
        window.location.href = "/faves";
    });
});