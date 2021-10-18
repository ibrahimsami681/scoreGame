/*
Date:July 25,2021
Programmer:sami ibrahim
Objective:More practice with event handlings and a great way to keep track of a pingpong game
*/

let p1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    btn: document.querySelector("#p1btn")
};

let p2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    btn: document.querySelector("#p2btn")
}

const reset = document.querySelector("#reset");
const winByTwoBtn = document.querySelector("#winByTwo");
const winningScoreSelect = document.querySelector("#endGame-score");
const audio = new Audio("cartoon-success-fanfare.mp3");
let winningScore;
let isWinByTwo = false;

console.dir(winningScoreSelect);

winningScoreSelect.addEventListener("change", (evt) => {
    console.log(evt);
    winningScore = evt.target.value;
    //reset score displayed 
    p1.display.innerHTML = 0;
    p2.display.innerHTML = 0;
    p1.score = 0;
    p2.score = 0;
    //enable buttons if disabled
    p1.btn.disabled = false;
    p2.btn.disabled = false;
    winByTwoBtn.disabled = false;
    isWinByTwo = false;


    p2.display.classList.remove("has-text-danger", "has-text-success");
    p1.display.classList.remove("has-text-success", "has-text-danger");

})

reset.addEventListener("click", () => {
    //enable btns , reset player pX.display and pX.score, and isWinByTwo
    isWinByTwo = false;
    p1.btn.disabled = false;
    p2.btn.disabled = false;
    winByTwoBtn.disabled = false;

    p1.display.innerHTML = 0;
    p2.display.innerHTML = 0;
    p1.score = 0;
    p2.score = 0;

    winningScoreSelect.value = "";

    p2.display.classList.remove("has-text-danger", "has-text-success");
    p1.display.classList.remove("has-text-success", "has-text-danger");

})

winByTwoBtn.addEventListener("click", () => {
    //also disable btn
    isWinByTwo = true;
    winByTwoBtn.disabled = true;
})

p1.btn.addEventListener("click", () => {

    //continue by adding to player score
    p1.score += 1;
    p1.display.innerHTML = p1.score;
    console.log(p1.display);
    console.log(`score to beat ${winningScore}`);
    console.log(`p1 score ${p1.score} vs. displayed ${p1.display.innerHTML}`);

    //check if game is won => disable btns is true
    if (!isWinByTwo) {
        if (p1.score == winningScore) {
            p1.btn.disabled = true;
            p2.btn.disabled = true;

            p2.display.classList.add("has-text-danger");
            p1.display.classList.add("has-text-success");

            audio.play();
        }
    } else {
        if (p1.score - p2.score >= 2 && p1.score == winningScore || p1.score > winningScore) {
            p1.btn.disabled = true;
            p2.btn.disabled = true;

            p2.display.classList.add("has-text-danger");
            p1.display.classList.add("has-text-success");

            audio.play();
        }
    }

})

p2.btn.addEventListener("click", () => {
    //continue by adding to player score
    p2.score += 1;
    p2.display.innerHTML = p2.score;
    //console.log(p2.display);
    //console.log(`score to beat ${winningScore}`);
    //console.log(`p2 score ${p2.score} vs. displayed ${p2.display.innerHTML}`);

    //check if game is won => disable btns is true
    if (!isWinByTwo) {
        if (p2.score == winningScore) {
            p2.btn.disabled = true;
            p1.btn.disabled = true;

            p2.display.classList.add("has-text-success");
            p1.display.classList.add("has-text-danger");

            audio.play();
        }
    }
    else {
        if (p2.score - p1.score >= 2 && p2.score == winningScore || p2.score > winningScore) {
            p1.btn.disabled = true;
            p2.btn.disabled = true;

            p1.display.classList.add("has-text-danger");
            p2.display.classList.add("has-text-success");

            audio.play();
        }
    }

})
