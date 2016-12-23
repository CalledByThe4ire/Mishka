'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mainNavList = document.querySelector('.main-nav__list');
	const icon = document.querySelector('.icon');

	const toggleMainNavList = function (evt) {
		evt.preventDefault();
		const iconPath = '/assets/images/icon.svg#icon_nav-toggle-';
		const openMod = 'open';
		const closeMod = 'close';
		const visibleMod = 'visible';

		evt.target.classList.toggle('icon--' + closeMod);
		mainNavList.classList.toggle('main-nav__list--' + visibleMod);

		if (!mainNavList.classList.contains('main-nav__list--' + visibleMod)) {
			icon.classList.add('icon--' + openMod);
			icon.firstElementChild.setAttribute('xlink:href', iconPath + openMod);
		}else {
			icon.classList.remove('icon--' + openMod);
			icon.firstElementChild.setAttribute('xlink:href', iconPath + closeMod);
		}
	};

	icon.addEventListener('click', function (evt) {
		toggleMainNavList(evt);
	});
});
