// YOUR CODE HERE
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

//random Number
const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const continentInput = document.querySelector("#text-");

const displayColor = (e) => {
    //the color that was selected
    const color = e.target.value;

    if(color == "blue"){
        radioOutput.innerHTML = "You picked blue 💙";
    }else if(color == "green"){
        radioOutput.innerHTML = "You picked green 💚";
    }else if(color == "pink"){
        radioOutput.innerHTML = "You picked pink 💕";
    }else if(color == "black"){
        radioOutput.innerHTML = "You picked black 🖤";
    }
};

const checkNumber = (e) => {
    const value = e.target.valueAsNumber;
    if (value > randomNumber){
        numOutput.innerHTML = "Not " + value + " ,guess lower!";
    }else if (value < randomNumber){
        numOutput.innerHTML = "Not " + value + " ,guess higher!";
    }else {
        numOutput.innerHTML = "Hurray! You got it! It's  " + value;
    }
}

// <<<<<<< HEAD
// // const continentCheck = (e) => {
// //     const check = e.target.
// // }
// =======
// const continentCheck = (e) => {
//     const check = e.target.
// }
// >>>>>>> 8f883c933a4899560e84a9381a1a64054e6da548

radioInput.addEventListener('change', displayColor);
numInput.addEventListener ('change', checkNumber);



// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

