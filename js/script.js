let body = document.querySelector('body')
let bigIphone = document.querySelector('.big-iphone')
// small iphone
let smallGoldIphone = document.querySelector('.gold-iphone')
let smallBlueIphone = document.querySelector('.blue-iphone')
let smallGrayIphone = document.querySelector('.gray-iphone')
let smallWhiteIphone = document.querySelector('.white-iphone')
let smallRedIphone = document.querySelector('.red-iphone')
// button clicked
smallGoldIphone.addEventListener('click', changeToGold)
smallBlueIphone.addEventListener('click', changeToBlue)
smallGrayIphone.addEventListener('click', changeToGray)
smallWhiteIphone.addEventListener('click', changeToWhite)
smallRedIphone.addEventListener('click', changeToRed)
//functions
function changeToGold() {
  body.style.backgroundColor = 'black'
  bigIphone.src = 'image/0.png'
}
function changeToBlue() {
  body.style.backgroundColor = '#247ec8'
  bigIphone.src = 'image/1.png'
}
function changeToGray() {
  body.style.backgroundColor = '#1e1e1e'
  bigIphone.src = 'image/2.png'
}
function changeToWhite() {
  body.style.backgroundColor = '#c79b53'
  bigIphone.src = 'image/3.png'
}
function changeToRed() {
  body.style.backgroundColor = '#c82525'
  bigIphone.src = 'image/4.png'
}
///////////////// onther way //////
let bodydiv = document.querySelector('body')
let bigIphonee = document.querySelector('.big-iphone')

function changeBigImg(source) {
  bigIphonee.src = source
}
function colors(color) {
  bodydiv.style.backgroundColor = color
}
