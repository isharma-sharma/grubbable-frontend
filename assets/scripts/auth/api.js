'use strict'
const config = require('../config')
const store = require('../store.js')
// const ui = require('./ui')
const signUp = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  }).then((response) => {
    console.log('token is', response.user.token)
    store.userToken = response.user.token
    store.userId = response.user.id
    return store
    // store.user.id = response.user.id
  }).then(console.log(data))
}
const updateInfo = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/update-info/' + store.userId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.userId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  }).then(console.log(data))
}
const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.userId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  }).then(console.log)
}
const seeAllUser = function () {
  console.log('seeAllUser here')
  return $.ajax({
    url: config.apiOrigin + '/users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  }).then(console.log)
}

const statusPost = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/statuses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const seeStatus = function () {
  console.log('i am here')
  return $.ajax({
    url: config.apiOrigin + '/statuses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}
module.exports = {
  signUp,
  signIn,
  updateInfo,
  changePassword,
  signOut,
  statusPost,
  seeStatus,
  seeAllUser
}
