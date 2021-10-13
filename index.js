// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifestsvv  m
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')


const StatusDisplay = document.querySelectorAll(".box");

// select each box via index starting at 0
// be able to click on box 1-9 in the game board container
// place X or O in the selected box
// Alternate between X an O
// track location of x and 0 to detect winning condition
// Message Win, or Tie


// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//StatusDisplay.innerHTML = currentPlayerTurn();

// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// var grid = [
//   ["","",""],
//   ["","",""],
//   ["","",""]
// ];

// // HORIZONTAL WINS
// function detectHorizontalWin(){
//   row_results = []
//   for(var i=0; i<grid.length; i++){
//     row_results.push(_detecthorizontalwin(i))
//   }
//   return row_results.includes(true)
// }

// function _detecthorizontalwin(row) {
//   for (var j=0; j<grid[row].length; j++)
//   {
//       if (grid[row][j] === ""){
//           return false;
//       }
//   else if (j>0 & (grid[row][j]!=grid[row][j-1])){
//     return false;
//   }
// }
// return true;
// }

// // VERTICAL WINS
// function detectVerticalWin() {
//   column_results = []
//   for (var j=0; j<grid.length; j++) {
//     column_results.push(_detectVerticalWin(j))
//   }
//   return row_results.includes(true)
// }

// function _detectVerticalWin(column) {
//   for (var i=0; j<grid.length; i++)
//   {
//     if (grid[i][column] === "") {
//       return false;
//     }
//   else if (i>0 & (grid[i][column]!=grid[i-1][column])) {
//   }
// }
// }

// // MAIN DIAGONAL WIN (Top Left to Right Bottom)


// function detectDiagonalWin() {
//   for (var i=0; i<grid.length; i++)
//   {
//     for (var j=0; j<grid[i].length; j++) {
//       if (i>0 & i == j) {
//       if (grid[i][j] === "") {
//         return false;
//       }
//       if (grid[i-1][j-1] !== grid[i][j]){
//         return false;
//       }
//     }
//   }
// }
// return true;
// }


// // COUNTER DIAGONAL (top right to bottom left)
// function detectDiagonalWin() {
//   for (var j=0;   )
// }

