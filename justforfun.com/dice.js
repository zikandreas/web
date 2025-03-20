// get button elemnet
const roll_button = document.querySelector("button");

// click event to button
roll_button.addEventListener("click", roll_dice);

function roll_dice() {
    // get both dice images
    const firstDice = document.querySelectorAll(".dice_area img")[0];
    const secondDice = document.querySelectorAll(".dice_area img")[1];
    
    // random number generator
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    
    firstDice.src = "images/dice" + random1 + ".png";
    secondDice.src = "images/dice" + random2 + ".png";
	
	// check for specials
	setTimeout(function() {	// delay cause alert popped before img updated
		if (random1 == 6 && random2 == 6) {
			alert("WOW! THAT'S A 6 + 6!");
		} 
		else if (random1 == random2) {
			alert("DOUBLE!");
		}
	}, 100);
}