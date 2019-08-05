let modalButton = document.getElementById("get-modal-btn");
let submitButton = document.getElementById("submit-post-btn");
let overlay = document.getElementById("overlay");
let overlayClose = document.getElementById("overlay-button");
let contentArea = document.getElementById("entry-content");

//add a button to modal to close it

modalButton.addEventListener("click", function() {
    overlay.style.visibility = 'visible';
    let content = contentArea.value;
    document.getElementById('content-input').value = content;
});

overlayClose.addEventListener("click", function() {
    overlay.style.visibility = 'hidden';
});