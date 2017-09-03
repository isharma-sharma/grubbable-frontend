'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/event.js')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})
$(() => {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#updateinfo').hide()
  $('#changePassword').hide()
})
$('#login-btn').click(function () {
  $('#sign-in').show()
  $('#sign-up').hide()
})
$('#sign-up-btn').click(function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#updateinfo').hide()
})
$('#update-info-btn').click(function () {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#updateinfo').show()
})
