const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page');

function setActive() {
    document.getElementById(page).className = "active";
}