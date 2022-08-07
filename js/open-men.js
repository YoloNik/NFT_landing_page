const menuBtn = document.querySelector('[data-menu-btn]')
const menu = document.querySelector('[data-menu]')
const search = document.querySelector('[data-moveSearch]')
const logoImg = document.querySelector('[data-logo-img]')
const logotitle = document.querySelector('[data-logo-title]')
const closeBtn = document.querySelector('[data-close]')


menuBtn.addEventListener('click', openMenu)

function openMenu(e) {
	menu.classList.toggle('is-close')
	menu.classList.toggle('is-open')
	search.classList.toggle('moveSearch')
	logoImg.classList.toggle('logoRotate')
	logotitle.classList.toggle('titleMove')
	menuBtn.classList.toggle('close')
}
