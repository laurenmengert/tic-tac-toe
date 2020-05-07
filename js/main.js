// DONE 1. In HTML, create 9 divs that each share a class and that each have a unique id. 
// 2. In JS, create a variable called "marker" with the initial value of 'X'.
// 3. Cache each div in a separate variable.
// 4. Using those variables, add click event listeners to each.
// 5. Above the event listeners, create a function called renderMarker that takes in a cell 
// that will be passed from the event listener.
// 6. Inside each event listener, call renderMarker and pass the current cell to it.
// 7. Inside renderMarker, if the marker is 'X', set the cell content to 'O' and reassign 
// marker to 'O'. Do the opposite if the marker is 'O'.
// 8. Inside each event listener, only call renderMarker if that cell's content is empty.
// 9. Above renderMarker, create a function called checkWin.
// 10. Call checkWin from inside renderMarker after the text has been set and the marker been 
// reassigned.
// 11. Inside checkWin, create a condition for each win condition. Since there are 9 win 
// conditions and two letters, there will need to be 18 win conditions. Inside these conditions,  
// create an alert that indicates who has won.
// 12. At the top, create a variable called tieCounter and initialize it to 0.
// 13. Inside renderMarker, increment tieCounter by 1.
// 14. Create an additional condition inside checkWin that checks to see if tieCounter is equal to
// 9. If it is, declare the game a tie.
// 15. In HTML, create a Play Again button with an id.
// 16. In JS, select the Play Again button and give it an event listener.
// 17. Above checkWin, create a function called reset. Inside it, reset the global variables and 
// reset all the cells' text to empty.
// 18. Inside the Play Again button event listener, call the reset function.
// 19. To prevent the players from continuing to put markers on the board, call reset after each 
// alert 


/*----- constants -----*/


const player = {
    '1': 'X',
    '-1': 'O',
    'null': null
};

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
    ];
    
/*----- app's state (variables) -----*/
let board;      
let turn;         
let winner;      


/*----- cached element references -----*/
const cellEls = Array.from(document.querySelectorAll('#board > div'));


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick); //handle click is a function that will be called later
document.getElementById('btn').addEventListener('click', init);


/*----- functions -----*/
init();
function init() {
    board = [null ,null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    renderBoard();
}

function renderBoard() {
    board.forEach(function(cell, cellIdx) {
        cellEls[cellIdx].innerHTML = player[cell];
    });
}
function handleClick(evt) {
    const cellIdx = cellEls.indexOf(evt.target)
    const cell = board[cellIdx];
    if (cell !== null) return;
    console.log(board[cellIdx]);
    console.log(turn, "This is the turn variable");
    console.log(cellIdx);
    board[cellIdx] = turn; //how does this line work?
    winner = getWinner(); //check for winner before changing turn
    renderBoard();
    turn *= -1;
}


function getWinner() {
//I tried for hours to write this function. I just could not get it :(

        
}
