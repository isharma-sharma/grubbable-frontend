const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onUpdateInfo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateInfo(data)
    .then(ui.updateInfoSuccess)
    .catch(ui.updateInfoFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onGetSingleUser = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.seeOneUser(data)
    .then(ui.singleUserSuccess)
    .catch(ui.singleUserFaliue)
}
const onGetAllUser = function (event) {
  event.preventDefault()
  api.seeAllUser()
    .then(ui.GetAllUserSuccess)
    .catch(ui.GetAllUserFaliure)
}
const onStatusPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.statusPost(data)
    .then(ui.statusPostSuccess)
    .catch(ui.statusPostFaliure)
}
const onSeeStatus = function (event) {
  event.preventDefault()
  api.seeStatus()
    .then(ui.seeStatusSuccess)
    .catch(ui.seestatusFaliure)
}

const onAddFriend = function (event) {
  event.preventDefault()
  const data = $(event.target).parent().parent().attr('data-id')
  api.addFriend(data)
    .then(ui.addFriendSuccess)
    .catch(ui.addFriendFaliure)
}

const onAboutfriend = function (event) {
  event.preventDefault()
  const id = $(event.target).parent().parent().attr('data-id')
  console.log(id)
  api.aboutFriend(id)
    .then(ui.aboutFriendSuccess)
    .catch(ui.aboutFriendFaliure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#updateinfo').on('submit', onUpdateInfo)
  $('#changePassword').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#special').on('submit', onStatusPost)
  $('#get-status').on('click', onSeeStatus)
  $('#see-user').on('click', onGetAllUser)
  $('#search-user').on('submit', onGetSingleUser)
  $('body').on('click', '.followUser', onAddFriend)
  $('body').on('click', '.aboutUser', onAboutfriend)
  // $('[data-toggle="popover"]').popover()
}

module.exports = {
  addHandlers
}
