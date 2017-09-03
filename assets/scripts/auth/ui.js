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
  console.log(data)
}
const updateInfoSuccess = (data) => {
  console.log(data)
}
const changePasswordSuccess = (data) => {
  console.log(data)
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  updateInfoSuccess,
  changePasswordSuccess
}
