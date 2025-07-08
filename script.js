const disp = document.querySelector("#disp")
const inp = document.querySelector("#inp")
const butt = document.querySelector("#butt")
const decl = document.querySelector("#decl")
let rand = Math.floor(Math.random() *100)+1
let tries = 10
const guessCount = document.querySelector("#guess-count")
const guessSlots = [
    document.querySelector("#guess-one"),
    document.querySelector("#guess-two"),
    document.querySelector("#guess-three"),
    document.querySelector("#guess-four"),
    document.querySelector("#guess-five"),
    document.querySelector("#guess-six"),
    document.querySelector("#guess-seven"),
    document.querySelector("#guess-eight"),
    document.querySelector("#guess-nine"),
    document.querySelector("#guess-ten")
];

butt.addEventListener("click", function() {
function guesser(){
        tries--
        guessCount.innerHTML = tries
        guessSlots[10-tries-1].textContent = guess; 
}
    const guess = Number(inp.value);
    disp.innerHTML = guess
      disp.innerHTML = guess;
  inp.value = "";


    if(guess < 1 || guess > 100){
        disp.innerHTML = "GUESS MUST BE BETWEEN 1 AND 100"
            disp.classList.add("shake");
        guessSlots[10-tries-1].classList.add("wrong")
        setTimeout(() => {
            disp.classList.remove("shake");
        }, 900);
        inp.focus()
    }
    else if(guess === rand){
        guesser()
        disp.style.backgroundColor = "yellowgreen"
        decl.innerHTML = "CORRECT GUESS!"
         fireConfetti() 
        disp.classList.remove("shake");
            butt.onclick = function(){
            location.reload()
        }
        butt.innerHTML = "PLAY AGAIN"
        guessSlots[10-tries-1].classList.add("correct")
            inp.disabled = true
    }
    else if(guess > rand){
        guesser()
        decl.innerHTML = "TOO HIGH, GO LOWER"
        disp.classList.add("shake");
        guessSlots[10-tries-1].classList.add("wrong")
        setTimeout(() => {
            disp.classList.remove("shake");
        }, 900);
        inp.focus()
    }
        else if(guess < rand){
        guesser()
        decl.innerHTML = "TOO LOW, GO HIGHER"
        disp.classList.add("shake");
         guessSlots[10-tries-1].classList.add("wrong")
        setTimeout(() => {
            disp.classList.remove("shake");
        }, 900);
        inp.focus()
    }
    else{
        return
    }

    if(tries === 0){
        inp.disabled = true
        butt.onclick = function(){
            location.reload()
        }
        decl.innerHTML = "GAME OVER! THE NUMBER WAS " + rand
        butt.innerHTML = "START OVER"
    }
else{
    return
}

});
inp.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        butt.click();
    }
});
function fireConfetti() {
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 }
    });
    confetti({
        particleCount: 200,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 }
    });
    confetti({
    particleCount: 150,
    spread: 200,
    origin: { y: 0.6 }
});
}

