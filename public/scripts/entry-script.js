var reportButton = document.querySelector('#report-btn');
var entryButton = document.querySelector('#addentry-btn');

reportButton.addEventListener ('click', () => {
    location.href="/mood";
});

entryButton.addEventListener ('click', () => {
    location.href="/user";
});