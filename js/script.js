// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: colton
// Created on: june 2023
// This file contains the JS functions for index.html



if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-6-02/sw.js", {
    scope: "/ICS2O-6-02/",
  })
}
function cookiePoint() {
  if (localStorage.howManyTimesClickedTheCookie) {
    localStorage.howManyTimesClickedTheCookie =
      Number(localStorage.howManyTimesClickedTheCookie) + 1
  } else {
    localStorage.howManyTimesClickedTheCookie = 1
  }
  document.getElementById("hits").innerHTML =
    "Total Hits :" + localStorage.howManyTimesClickedTheCookie
}