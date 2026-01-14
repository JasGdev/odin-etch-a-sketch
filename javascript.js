const body = document.querySelector('body')
const container = document.querySelector('#container')

// create 16x16 grid of square divs
// put grid squares inside container
// use flexbox to make divs appear as a grid

function makeSquareDivs(num){
    squareSize = 500/num;
    for (let i = 0; i < num*num; i++){
        let square_div = document.createElement('div')
        square_div.classList.add('squares')
        square_div.style.cssText = "background: black;";
        square_div.style.width = `${squareSize}px`;
        square_div.style.height = `${squareSize}px`;
        container.appendChild(square_div)
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

