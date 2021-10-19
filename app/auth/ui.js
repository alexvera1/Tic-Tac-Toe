'use strict'


// require the store object. We will use it to share data
// between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#login-display').text('Signed up successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#login-display').removeClass()
  $('#login-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  //$('#game-board').hide()

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  //$('#game-board').show()

  // print the error
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  // we are going to add the `user` we got back in our response's data
  // to the `store` object. So we can access the user's token
  // later in api.js
  store.user = responseData.user
  console.log('store is', store)

  // tell the user it was successful
  $('#login-display').text('Signed in successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#login-display').removeClass()
  $('#login-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide()
  // After we sign in, show the section with the id `after-sign-in`
  $('#after-sign-in').show()
  $('.game-board').removeClass("hide")
  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in Failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  // print the error
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
    // tell the user it was successful
    $('#login-display').text('Signed Out Successfully, Good Bye!')

    // remove existing classes, then add a green text-success class from bootstrap
    $('#login-display').removeClass()
    $('#login-display').addClass('text-success')

    // clear (reset) all of the forms
    $('form').trigger('reset')

    // After we sign in, show the section with the id `after-sign-in`
    $('#after-sign-in').hide()
    $('#before-sign-in').show()
    $('.game-board').addClass("hide")
    $(".cell").text("")
    $(".game-status").text("")
    console.log('responseData is', responseData)
  }

  const signOutFailure = function (error) {
    // tell the user it was failure
    $('#error-message').text('Sign Out Failed')

    // remove existing classes, then add a red text-danger class from bootstrap
    $('#error-message').removeClass()
    $('#error-message').addClass('text-danger')

    $('#after-sign-in').hide()
    $('#before-sign-in').show()


    // print the error
    console.error('error is', error)
  }



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
}
