'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');
	const mqlTablet = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1149px)');
	const mqlDesktop = window.matchMedia('only screen and (min-width: 1150px)');

	const nav = document.querySelector('.js_nav');
	const logo = document.querySelector('.js_logo');
	const icon = document.querySelector('.icon');

	const iconPath = '/assets/images/icon.svg#icon_nav-toggle-';
	const openMod = 'open';
	const closeMod = 'close';
	const visibleMod = 'visible';

	/**
	 * Скрывает / отображает навигационные ссылки
	 * для мобильной версии сайта
	 * @param {MouseEvent} evt
	 */
	const toggleNav = evt => {
		evt.target.classList.toggle('icon--' + closeMod);
		nav.classList.toggle('nav--' + visibleMod);

		if (!nav.classList.contains('nav--' + visibleMod)) {
			icon.classList.add('icon--' + openMod);
			icon.firstElementChild.setAttribute('xlink:href', iconPath + openMod);
		}else {
			icon.classList.remove('icon--' + openMod);
			icon.firstElementChild.setAttribute('xlink:href', iconPath + closeMod);
		}
	};

	/**
	 * Меняет атрибуты у логотипа
	 * для каждой из ширин viewport'а
	 * @param {String} width
	 * @param {String} height
	 * @param {String} name
	 */
	const setLogo = (width, height, name) => {
		const iconLogoPath = '/assets/images/icon.svg#icon_';
		logo.classList = 'logo js_logo logo--' + name;
		logo.setAttribute('width', width);
		logo.setAttribute('height', height);
		logo.querySelector('use').setAttribute('xlink:href', iconLogoPath + 'logo-' + name);
	};

	icon.addEventListener('click', evt => {
		toggleNav(evt);
	});

	if (mqlTabDesk.matches) {
		if (!nav.classList.contains('nav--' + visibleMod)) {
			nav.classList.add('nav--' + visibleMod);
		}
	}

	if (mqlMobile.matches) {
		setLogo('86px', '35px', 'mobile');

		if (icon.classList.contains('icon--' + openMod)) {
			nav.classList.remove('nav--' + visibleMod);
		}
	}

	if (mqlTablet.matches) {
		setLogo('114px', '48px', 'tablet');
	}

	if (mqlDesktop.matches) {
		setLogo('150px', '74px', 'desktop');
	}

	window.addEventListener('resize', () => {
		if (mqlTabDesk.matches) {
			if (!nav.classList.contains('nav--' + visibleMod)) {
				nav.classList.add('nav--' + visibleMod);
			}
		}

		if (mqlMobile.matches) {
			setLogo('86px', '35px', 'mobile');

			if (icon.classList.contains('icon--' + openMod)) {
				nav.classList.remove('nav--' + visibleMod);
			}
		}

		if (mqlTablet.matches) {
			setLogo('114px', '48px', 'tablet');
		}

		if (mqlDesktop.matches) {
			setLogo('150px', '74px', 'desktop');
		}
	});

});
