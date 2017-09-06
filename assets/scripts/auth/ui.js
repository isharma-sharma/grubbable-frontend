const store = require('../store')
const signUpSuccess = (data) => {
  // resetForm($('#sign-up'))
  $('.form-control').val('')
  console.log(data)
  $('#sign-up').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('signUpSuccess now signin')
  $('#succmsg').show()
}
const signInSuccess = (data) => {
  console.log(store.userId)
  $('#profile-name').text('UserId ' + '  ' + store.userId + '  ' + ' ')
}
const updateInfoSuccess = (data) => {
  console.log(data)
}
const changePasswordSuccess = (data) => {
  console.log(data)
}
const signOutSuccess = (data) => {
  console.log(data)
  $('#sign-in').hide()
}
const statusPostSuccess = (data) => {
  console.log(data)
}
const statusPostFaliure = (error) => {
  console.log(error)
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  updateInfoSuccess,
  changePasswordSuccess,
  signOutSuccess,
  statusPostSuccess,
  statusPostFaliure
}
