let homeScore = document.querySelector("#home-score");
let guestScore = document.querySelector("#guest-score");
let add_btn = document.querySelectorAll(".plus-btn");
let homeBtn = document.querySelectorAll("#plus-btn-home");
let guestBtn = document.querySelectorAll("#plus-btn-guest");
let resetBtn = document.querySelector("#reset-btn");
let currentHomeScore = 0;
let currentGuestScore = 0;
let home_clicked = true;
let reset_clicked = false;
let guestHighlight = document.querySelector("#guest");
let homeHighlight = document.querySelector("#home");
let winnerTextHome = document.querySelector("#home-winner-text");
let winnerTextGuest = document.querySelector("#guest-winner-text");


homeBtn.forEach(el => {
    el.addEventListener("click", function () {
    home_clicked = true;
    });
});

guestBtn.forEach(el => {
    el.addEventListener("click", function () {
    home_clicked = false;
    });
});

resetBtn.addEventListener("click", function () {
    reset_clicked = true;
    if (reset_clicked) {
        currentHomeScore = 0;
        homeScore.textContent = 0;
        currentGuestScore = 0;
        guestScore.textContent = 0;
        homeHighlight.classList.remove("highlight");
        guestHighlight.classList.remove("highlight");
        winnerTextHome.style.display = "none";
        winnerTextGuest.style.display = "none";
    };
});


guestHighlight.classList.remove("highlight");
homeHighlight.classList.remove("highlight");
winnerTextGuest.style.display = "none";
winnerTextHome.style.display = "none";

// style="text-shadow: none; border: none;
// homeHighlight.setAttribute("style", "border-color:#FFFFFF;");

let result = 0;

add_btn.forEach(el => {
    el.addEventListener("click", function () {
        result = parseInt(el.textContent.replace(/[^0-9+]/g), '');
        
    if (isNaN(result)) {
        console.error("Not a valid number from: ", el.textContent);
        return result
    };
    
        
    if (home_clicked) {  
        currentHomeScore += result;
        homeScore.textContent = currentHomeScore;
    } else if (!home_clicked) {
        currentGuestScore += result;
        guestScore.textContent = currentGuestScore;
        };
    if (currentGuestScore > currentHomeScore) {
        guestHighlight.classList.add("highlight");  
        homeHighlight.classList.remove("highlight");
        winnerTextGuest.style.display = "flex";
        winnerTextHome.style.display = "none";
    } else if (currentGuestScore < currentHomeScore) {
        homeHighlight.classList.add("highlight");  
        guestHighlight.classList.remove("highlight");  
        winnerTextHome.style.display = "flex";
        winnerTextGuest.style.display = "none";
    } else {
        guestHighlight.classList.remove("highlight");  
        homeHighlight.classList.remove("highlight");
        winnerTextHome.style.display = "none";
        winnerTextGuest.style.display = "none";
    }
    console.log(currentGuestScore);
    console.log(currentHomeScore);
    console.log(result);
    });
});

// if (currentGuestScore != currentHomeScore) {
//     // currentWinner.setAttribute(".highlight");
//     currentGuestScore.setAttribute(classList.add(".highlight"))
// } else if (currentGuestScore = currentHomeScore) {
//     currentWinner.setAttribute(classList.remove(".highlight"))
// }








