let currentPlayer = "x"
// let grid = ["", "", "", "", "", "", "", "", ""];


// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];


// const boxClick = (event) => {
//  $(event.currentTarget).text(currentPlayer); {
//    if (currentPlayer === "x") {
//      currentPlayer = "o";
//    } else if (currentPlayer === "o") {
//      currentPlayer = "x";
//    }
//  }

//  const cellClick = (event) => {
//   $(event.currentTarget).text(currentPlayer); {
//     // if (currentPlayer === "x" || currentPlayer === "o") {
//     //   console.log('Cell not available')
//     if (currentPlayer === "x") {
//       currentPlayer = "o";
//     } else if (currentPlayer === "o") {
//       currentPlayer = "x";
//     }
//   }

//  // check if the current player is "X"
//  //if so, set currentPlayer to be "O"
//  // Otherwise, set current player to "X"

//}

//  This function only allows the function called playerChooses to click on a cell if the cell is empty
const cellClick = (event) => {
  if ($(event.currentTarget).text() === "") {
    playerChooses(event)
  }

//  $(event.currentTarget).text(currentPlayer); {
//    if (currentPlayer === "x") {
//      currentPlayer = "o";
//    } else if (currentPlayer === "o") {
//      currentPlayer = "x";
//    }
//  }
}


//  setts inner text within the cell and alternating between x and o
const playerChooses = (event) => {
$(event.currentTarget).text(currentPlayer); {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else if (currentPlayer === "o") {
    currentPlayer = "x";
  }
}
}





module.exports = {
  cellClick,
}
