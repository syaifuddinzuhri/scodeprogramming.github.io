$(document).ready(function () {
  // Page Scroll
  $('.page-scroll').on('click', function (e) {
    e.preventDefault()
    $('.page-scroll').each(function () {
      $(this).removeClass('active')
      $('.toggle input').prop('checked', false)
    })
    $('nav ul').each(function () {
      $(this).removeClass('slide')
    })
    $(this).addClass('active')
    var target = this.hash
    $target = $(target)
    $('html, body').animate(
      {
        scrollTop: $target.offset().top - 50,
      },
      1000,
      'swing',
    )
  })
})

const btnSignin = document.getElementById('btn-signin')
const btnSignups = document.querySelectorAll('#btn-signup')
const btnSubmit = document.querySelector('.submit')
const btnFbs = document.querySelectorAll('.fa.fa-facebook')
const btnIgs = document.querySelectorAll('.fa.fa-instagram')
const btnTws = document.querySelectorAll('.fa.fa-twitter')
const menuToggle = document.querySelector('.toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide')
})

btnFbs.forEach((btnFb) => {
  btnFb.addEventListener('click', function () {
    alert('Facebook')
  })
})
btnIgs.forEach((btnIg) => {
  btnIg.addEventListener('click', function () {
    alert('Instagram')
  })
})
btnTws.forEach((btnTw) => {
  btnTw.addEventListener('click', function () {
    alert('Twitter')
  })
})

btnSignin.addEventListener('click', function () {
  alert('Sign In to SCode Programming')
})

btnSignups.forEach((btn) => {
  btn.addEventListener('click', function () {
    alert('Sign Up to SCode Programming')
  })
})

btnSubmit.addEventListener('click', function () {
  alert('Submit Comment')
})
