const store = require('../store')
const showStatusTemplate = require('../templates/statusdisplay.handlebars')
const showSingleUserTemplate = require('../templates/displayUsers.handlebars')
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
const singleUserSuccess = (data) => {
  console.log(data)
  $('#display-user').show()
  $('.head1').show()
  const showSingleUserHtml = showSingleUserTemplate({ user: data.user })
  $('#addUser').append(showSingleUserHtml)
  console.log(showSingleUserHtml + 'checking handlebars')
}
const GetAllUserSuccess = (data) => {
  console.log(data)
}
const GetAllUserFaliure = (error) => {
  console.log(error)
}
const statusPostSuccess = (data) => {
  console.log(data)
  const showStatusHtml = showStatusTemplate({
    status: data.status
  })
  $('#see-status').html(showStatusHtml)
  console.log(showStatusHtml)
}

const seeStatusSuccess = (data) => {

}

const statusPostFaliure = (error) => {
  console.log(error)
}

const addFriendSuccess = (data) => {
  console.log(data + 'this is friend-id')
}

const aboutFriendSuccess = function (data) {
  console.log(data)
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
  GetAllUserFaliure,
  seeStatusSuccess,
  singleUserSuccess,
  addFriendSuccess,
  aboutFriendSuccess
}
