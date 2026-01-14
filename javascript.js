const body = document.querySelector('body');
const container = document.querySelector('#container');

// 0 is for turn white, 1 is RGB, 2 is darken, 3 is RGB + darken
var mode = 0;

// create 16x16 grid of square divs
// put grid squares inside container
// use flexbox to make divs appear as a grid

function makeSquareDivs(num){
    squareSize = 500/num;
    for (let i = 0; i < num*num; i++){
        let square_div = document.createElement('div');
        square_div.classList.add('squares');
        square_div.style.cssText = "background: black;";
        square_div.style.width = `${squareSize}px`;
        square_div.style.height = `${squareSize}px`;
        container.appendChild(square_div);
    }
    const squares = document.querySelectorAll(".squares");

    for (square of squares){
        square.addEventListener('mouseenter', (e) =>
            e.target.style.backgroundColor = "white");
    }
}

makeSquareDivs(10)




// Adding button
const bt = document.createElement('button')
bt.textContent = "New Grid"
body.insertBefore(bt, container);
bt.addEventListener('click', (e) => {
    // Adding prompt
    let numSides = prompt("Number of squares per side for the new grid?", "2-100");
    
    if (numSides <= 100){
        // existing grid removed
        container.innerHTML = ""
        // new grid is generated
        makeSquareDivs(numSides)
    } else {
        alert("Please enter from 2 to 100")
        bt.dispatchEvent(new Event('click'));
    }
    
})

// Adding options
const optionDiv = document.createElement('div');
optionDiv.classList.add('optional');
body.insertBefore(optionDiv, container)

const rgbBt = document.createElement('button')
rgbBt.classList.add('rgb');
rgbBt.textContent = "RGB effects"

const darkenBt = document.createElement('button')
darkenBt.classList.add('darken');
darkenBt.textContent = "Darken Effects"

optionDiv.appendChild(rgbBt)
optionDiv.appendChild(darkenBt)

// for RGB
// if clicked toggle button background 
// if mode = 0 => 1
// if mode = 1 => 0
// if mode = 2 => 3
// if mode = 3 => 2
rgbBt.addEventListener('click', (e) => {
    rgbBt.classList.toggle("active");
    if (mode == 0){mode = 1} 
    else if (mode == 1) {mode = 0}
    else if (mode == 2) {mode = 3}
    else {mode = 2}
})


// for darken
// if clicked toggle button background 
// if mode = 0 => 2
// if mode = 2 => 0
// if mode = 1 => 3
// if mode = 3 => 1

darkenBt.addEventListener('click', (e) => {
    darkenBt.classList.toggle("active");
})

darkenBt.addEventListener('click', (e) => {
    darkenBt.classList.toggle("active");
    if (mode == 0){mode = 2} 
    else if (mode == 2) {mode = 0}
    else if (mode == 1) {mode = 3}
    else {mode = 1}
})

