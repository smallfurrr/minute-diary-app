var reportButton = document.querySelector('#report-btn');
var viewButton = document.querySelector('#view-btn');
var entryButton = document.querySelector('#addentry-btn');

reportButton.addEventListener ('click', () => {
    location.href="/mood";
});

viewButton.addEventListener ('click', () => {
    location.href="/log";
});

entryButton.addEventListener ('click', () => {
    location.href="/user";
});