'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// require our auth event handler functions
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Whenever our #sign-up form is submitted, call the `onSignUp` function
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
})


