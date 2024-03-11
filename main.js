const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const  btnNew = document.querySelector(".btn-new");
const  diceEl = document.querySelector(".dice");
const  btnDice = document.querySelector(".btn-dice");
const  btnHold = document.querySelector(".btn-hold");
let scores, current, activePlayer, playing;
const init = () => {
    scores = [0, 0];
    current = 0;
    activePlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    playing = true;
    diceEl.classList.add("hidden");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
}
init();
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}
btnDice.addEventListener("click", () => {
    if(playing) {
    const dice = Math.ceil(Math.random() * 6);
    diceEl.classList.remove("hidden");
    diceEl.src = `imgs/dice-${dice}.png`;
    if(dice !== 1) { 
        current += dice;
        document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
        switchPlayer();
    }
}
});
btnHold.addEventListener("click", () =>  {
    if(playing) {
        scores[activePlayer] += current;
        diceEl.classList.add("hidden");
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if( scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            playing = false;
        } else {
            switchPlayer();
        }
    }
});
btnNew.addEventListener("click", init);