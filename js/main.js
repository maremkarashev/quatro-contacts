const burger = document.querySelector('.burger');
const mobileNone = document.querySelector('.mobile-none');
const closedMob = document.querySelector ('.closed-mob');
const openMobile = document.querySelector ('.open-mobile')
const burgerFoot = document.querySelector ('.burger-foot')
const footMobile = document.querySelector ('.foot-mobile')
const closedFoot = document.querySelector ('.closed-foot')



burger.addEventListener('click', function() {
	openMobile.style.display = 'block'
})

closedMob.addEventListener('click', function() {
	openMobile.style.display = 'none'
})


const order = document.querySelector('.order')
const closed = document.querySelector ('.closed')
const openForm = document.querySelector ('.open-form')
const buttonMob = document.querySelector ('.button-mob')
const buttonFoot = document.querySelector ('.button-foot')
const footForm = document.querySelector ('.foot-form')
const closedForm = document.querySelector ('.closed-form')

order.addEventListener('click', function() {
	openForm.style.display = 'block'
})
closed.addEventListener('click', function() {
	openForm.style.display = 'none'
})
buttonMob.addEventListener ('click', function() {
	openForm.style.display = 'block'
})
