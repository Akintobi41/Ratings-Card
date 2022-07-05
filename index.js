let submitBtn = document.querySelector('.submit-button');

let selectedBtns = document.querySelectorAll('.interactive-buttons');

let subComponent = document.querySelector('.sub-component');

let header = document.querySelector('.introduction');

let newInterface = document.querySelector('#response-section')

let button = document.querySelector('#ratings-button');

let ratings;

selectedBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        ratings = e.target.textContent;
    })
})

function newRatings() {
    if (ratings == 1 || ratings == 2 || ratings == 3 || ratings == 4 || ratings || 5) {
        subComponent.style.display = "none";
        header.style.display = "none";
        newInterface.style.display = "flex"
    }
    if (ratings == 1) {
        button.innerText = "You selected " + ratings + " out of 5";
    }
    else if (ratings == 2) {
        button.innerText = "You selected " + ratings + " out of 5";
    }
    else if (ratings == 3) {
        button.innerText = "You selected " + ratings + " out of 5";
    }
    else if (ratings == 4) {
        button.innerText = "You selected " + ratings + " out of 5";
    }
    else if (ratings == 5) {
        button.innerText = "You selected " + ratings + " out of 5";
    }
}

submitBtn.addEventListener('click', newRatings);
