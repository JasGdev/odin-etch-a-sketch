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
}

makeSquareDivs(10)

//issue is that all of them are turning hte last square white
function turnWhite(item){
    item.style.backgroundColor = "white";
    console.log("White");
}
const squares = document.querySelectorAll(".squares");
console.log(squares)
for (square of squares){
    square.addEventListener('mouseenter', 
        console.log(square);
}
console.log(squares)



