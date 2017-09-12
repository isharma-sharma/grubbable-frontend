const store = require('../store')
const showStatusTemplate = require('../templates/status-display.handlebars')
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
  $('#sign-in').hide()
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
const GetAllUserSuccess = (data) => {
  console.log(data)
}
const GetAllUserFaliure = (error) => {
  console.log(error)
}
const statusPostSuccess = (data) => {
  console.log(data)
  const showStatusHtml = showStatusTemplate({statuses: data.statuses})
  $('#see-status').html(showStatusHtml)
  console.log($('#see-status').html(showStatusHtml))
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
  statusPostFaliure,
  GetAllUserSuccess,
  GetAllUserFaliure
}
