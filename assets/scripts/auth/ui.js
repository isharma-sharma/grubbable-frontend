const store = require('../store')
const showStatusTemplate = require('../templates/statusdisplay.handlebars')
const showSingleUserTemplate = require('../templates/displayUsers.handlebars')
const showAboutUserTemplate = require('../templates/aboutUser.handlebars')
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
  if (friendship.friend_id === exists){}
  //  print already friend .
  $('#testing').text('you have add the friend')
}

const aboutFriendSuccess = function (data) {
  console.log(data)
  const showAboutUserHtml = showAboutUserTemplate({
    user: data.user
  })
  console.log(showAboutUserHtml)
  $('#testing').html(showAboutUserHtml)
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
