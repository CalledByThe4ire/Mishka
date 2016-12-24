'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');
	const mqlTablet = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1149px)');
	const mqlDesktop = window.matchMedia('only screen and (min-width: 1150px)');

	const mainNavList = document.querySelector('.main-nav__list');
	const icon = document.querySelector('.icon');
	const logo = document.querySelector('.page-header .logo');

	/**
	 * Скрывает / отображает навигационные ссылки
	 * для мобильной версии сайта
	 * @param {MouseEvent} evt
	 */
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

	/**
	 * Меняет атрибуты у логотипа
	 * для каждой из ширин viewport'а
	 * @param {String} width
	 * @param {String} height
	 * @param {String} name
	 */
	const setLogo = function (width, height, name) {
		const iconLogoPath = '/assets/images/icon.svg#icon_';
		logo.classList = 'logo logo--' + name;
		logo.setAttribute('width', width);
		logo.setAttribute('height', height);
		logo.querySelector('use').setAttribute('xlink:href', iconLogoPath + 'logo-' + name);
	};

	icon.addEventListener('click', function (evt) {
		toggleMainNavList(evt);
	});

	if (mqlTabDesk.matches) {
		if (!mainNavList.classList.contains('main-nav__list--visible')) {
			mainNavList.classList.add('main-nav__list--visible');
		}
	}

	if (mqlMobile.matches) {
		setLogo('86px', '35px', 'mobile');
	}

	if (mqlTablet.matches) {
		setLogo('114px', '48px', 'tablet');
	}

	if (mqlDesktop.matches) {
		setLogo('150px', '74px', 'desktop');
	}

	window.addEventListener('resize', () => {
		if (mqlTabDesk.matches) {
			if (!mainNavList.classList.contains('main-nav__list--visible')) {
				mainNavList.classList.add('main-nav__list--visible');
			}
		}

		if (mqlMobile.matches) {
			setLogo('86px', '35px', 'mobile');
		}

		if (mqlTablet.matches) {
			setLogo('114px', '48px', 'tablet');
		}

		if (mqlDesktop.matches) {
			setLogo('150px', '74px', 'desktop');
		}
	});

});
