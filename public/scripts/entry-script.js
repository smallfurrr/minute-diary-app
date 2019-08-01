var reportButton = document.querySelector('#report-btn');
var entryButton = document.querySelector('#addentry-btn');

reportButton.addEventListener ('click', () => {
    location.href="/mood";
});

//actually not sure if /user will work cos there's no get route for it..
//yup it doesnt.
entryButton.addEventListener ('click', () => {
    location.href="/user";
});