
//  // check if the current player is "X"
//  //if so, set currentPlayer to be "O"
//  // Otherwise, set current player to "X"



let currentPlayer = "x"


//  This function only allows the function called playerChooses to click on a cell if the cell is empty

//  $(event.currentTarget).text(currentPlayer); {
//    if (currentPlayer === "x") {
//      currentPlayer = "o";
//    } else if (currentPlayer === "o") {
//      currentPlayer = "x";
//    }
//  }

let grid = ["", "", "", "", "", "", "", "", ""];
//  sets inner text within the cell and alternating between x and o
const playerChooses = (event) => {
const index = Number(event.currentTarget.id) -1
grid[index] = currentPlayer
console.log(grid)
$(event.currentTarget).text(currentPlayer)
  checkWin()
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else if (currentPlayer === "o") {
    currentPlayer = "x";
  }
}


// WINNING CONDITIONS
const checkWin = () => {
  let testArray = [grid[0], grid[1], grid[2]]
  const check1 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[3], grid[4], grid[5]]
  const check2 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[6], grid[7], grid[8]]
  const check3 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[0], grid[3], grid[6]]
  const check4 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[1], grid[4], grid[7]]
  const check5 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[2], grid[5], grid[8]]
  const check6 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[0], grid[4], grid[8]]
  const check7 = testArray.every((square) => {
    return square === currentPlayer
  })
  testArray= [grid[2], grid[4], grid[6]]
  const check8 = testArray.every((square) => {
    return square === currentPlayer
  })
    if (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8) {
      $(".game-status").text(winningMessage())
      gameGoing = false
      console.log(`Congradulations ${currentPlayer} Wins`)
    }
}

// variable you can check if the game is happening
let gameGoing = true

const cellClick = (event) => {
  // only let clicks happen when the game is going
  if (gameGoing) {
    if ($(event.currentTarget).text() === "") {
      playerChooses(event)
    }
  }
}

const winningMessage = () => `Player ${currentPlayer} has won!`;
console.log(winningMessage())


// ----- NEW GAME BUTTON -------

const newGameSuccess = function (responseData) {

  $(".cell").text("")
  $(".game-status").text("")

  console.log('responseData is', responseData)
}

const newGameFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Reset Failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  // print the error
  console.error('error is', error)
}



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




module.exports = {
  cellClick,
  newGameSuccess,
  newGameFailure

}
