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
const onStatusPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.statusPost(data)
    .then(ui.statusPostSuccess)
    .then(ui.statusPostFaliure)
}
const onSeeStatus = function (event) {
  event.preventDefault()
  api.seeStatus()
    .then(ui.seeStatusSuccess)
    .then(ui.seestatusFaliure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#updateinfo').on('submit', onUpdateInfo)
  $('#changePassword').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#special').on('submit', onStatusPost)
  $('#see-status').on('click',onSeeStatus)
}

module.exports = {
  addHandlers
}
