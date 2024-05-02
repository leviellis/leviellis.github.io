// slider for temporary "AI"
let slider = document.getElementById("range")
let sliderSeed = 1

// player (choice) and AI (opponent) card selection window divs
let choice =  document.getElementById("choice")
let opponent = document.getElementById("opponent")

// loss,win,draw outcome indicator, default color lightslategray
const colorBG = document.getElementById("content")
// div containing hoverable rock, paper, and scissors cards
const hand = document.getElementById("hand")

// rock card nested within "hand"
const rock = document.getElementById("rock")
// paper card nested within "hand"
const paper = document.getElementById("paper")
// scissors card nested within "hand"
const scissors = document.getElementById("scissors")

// array for removing/adding "hoverable" style for cards in loop
const options = [rock, paper, scissors]

// SHOOT! button, used for primary logic .onclick function
const shoot = document.getElementById("shoot")
// determines if game is in playable or over state
let playable = true

// ints with possible 0 for rock, 1 for paper, or 2 for scissors
let active
let AI

// results[outcome (int 0 for loss, 1 for win, or 2 for draw)]
let outcome
const results = ["LOSS", "WIN!", "DRAW"]

// click detector
addEventListener("click", (event) => {})

// detects change to temporary slider, adjusts AI output
slider.onchange = function(event){
    var output = document.getElementById("outputVar")
    output.innerHTML = slider.value
    sliderSeed = slider.value
    console.log("slider adjusted")
  }

// stores click on rock card in active, swaps selected image
rock.onclick = function() {
    if (playable) {
        choice.src="images/f0.jpg"
        active = 0
    }
}

// stores click on paper card in active, swaps selected image
paper.onclick = function() {
    if (playable) {
        choice.src="images/f1.jpg"
        active = 1
    }
}

// stores click on scissors card in active, swaps selected image
scissors.onclick = function() {
    if (playable) {
        choice.src="images/f2.jpg"
        active = 2
    }
}

// determines game outcome, runs when clicked...
shoot.onclick = () => {
    // ...if game is not over and player has made selection
    if (playable && active >= 0) {
        
        // returns int 0-2, currently determined by slider
        summonAI(sliderSeed)

        // swaps placeholder image to AI selected image
        opponent.src="images/f"+AI+".jpg"

        // changes background color to indicate outcome
        if (active==AI) {
            colorBG.style.backgroundColor = "darkgoldenrod"
            outcome = 2
        }
        else if (active==2 && AI==0)
        {
            colorBG.style.backgroundColor = "indianred"
            outcome = 0
        }
        else if (active+1==AI){
            colorBG.style.backgroundColor = "indianred"
            outcome = 0
        }
        else {
            colorBG.style.backgroundColor = "seagreen"
            outcome = 1
        }

        // prints outcome of LOSS, WIN! or DRAW
        document.getElementById("result-printer").innerHTML = results[outcome]

        // locks interactions aside from this SHOOT! button
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("hoverable")
        }

        // resets player selection
        active = -1

        // swaps SHOOT! text on this button to RESET
        shoot.textContent="RESET"

        // switches game state from playable to over
        playable = false
    }
    else {
        // ...if game is over, reset
        reset()
    }
}

// outputs int 0-2, will later contain logic
summonAI = function(r) {
    return AI = r
}

// resets game for another round
reset = function() {
    // resets images in card selection window to default
    choice.src="images/choose.jpg"
    opponent.src="images/choose.jpg"

    // clears outcome indicator text 
    document.getElementById("result-printer").innerHTML = " "

    // unlocks interaction with cards in hand for selection
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("hoverable")
    }

    // resets background color to lightslategray
    colorBG.style.backgroundColor = "lightslategray"

    // swaps RESET text on this button to SHOOT! 
    shoot.textContent="SHOOT!"
    // switches game state from over to playable
    playable = true
}