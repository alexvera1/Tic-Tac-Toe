'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// require our auth event handler functions
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')


$(() => {
  // Whenever our #sign-up form is submitted, call the `onSignUp` function
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game-button').on('submit', authEvents.onNewGame)

  // Box Clicks Event Listener
  $('#1').on('click',gameEvents.cellClick)
  $('#2').on('click',gameEvents.cellClick)
  $('#3').on('click',gameEvents.cellClick)
  $('#4').on('click',gameEvents.cellClick)
  $('#5').on('click',gameEvents.cellClick)
  $('#6').on('click',gameEvents.cellClick)
  $('#7').on('click',gameEvents.cellClick)
  $('#8').on('click',gameEvents.cellClick)
  $('#9').on('click',gameEvents.cellClick)
})


