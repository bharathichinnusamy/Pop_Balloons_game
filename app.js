// we declare a new global variable containing an array that represents the ballons map
let ballonsMap = ['green', 'red', 'blue', 'purple', 'green', 'red', 'blue', 'purple', 'green', 'red', 'blue', 'purple', 'green', 'red', 'blue', 'purple', 'green', 'red', 'blue', 'purple'];
let activeBalloons = 20;

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (index) => {

    // set the color to null on the balloon position
    document.getElementById(index).style.backgroundColor = null;
    document.getElementById(index).className = "balloon popped";
    activeBalloons = activeBalloons - 1;
    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    if (activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
    
}

const render = () => {

    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        return `<div class="balloon active" style="background:${color}" id="${position}" onClick="popBalloon(${position})"></div>`; // <--- render each balloon
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

}

// this makes the "render" function trigger when the website starts existing
window.onload = render();