'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');
	const mqlTablet = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1149px)');
	const mqlDesktop = window.matchMedia('only screen and (min-width: 1150px)');

	const nav = document.querySelector('.js_nav');
	const logo = document.querySelector('.js_logo');
	const toggle = document.querySelector('.js_toggle');

	const closeMod = 'close';
	const visibleMod = 'visible';

	/**
	 * Скрывает / отображает навигационные ссылки
	 * для мобильной версии сайта
	 * @param {MouseEvent} evt
	 */
	const toggleNav = evt => {
		evt.target.classList.toggle('page-header__toggle--' + closeMod);
		nav.classList.toggle('nav--' + visibleMod);

		if (!nav.classList.contains('nav--' + visibleMod)) {
			toggle.classList.remove('page-header__toggle--' + closeMod);
		}else {
			toggle.classList.add('page-header__toggle--' + closeMod);
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
		const iconLogoPath = 'images/icon.svg#icon_';

		if (!(navigator.userAgent.match(/Edge/) || ( navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/) ) )) {
			// for an SVG element, className is not a string, but an instance of SVGAnimatedString
			logo.setAttribute('class', 'logo js_logo logo--' + name);
			logo.setAttribute('width', width);
			logo.setAttribute('height', height);
			logo.querySelector('use').setAttribute('xlink:href', iconLogoPath + 'logo-' + name);
		}
	};

	/**
	 * Меняет значение атрибута в зависимости от размера окна браузера
	 */
	const matchMedia = () => {
		if (mqlTabDesk.matches) {
			if (!nav.classList.contains('nav--' + visibleMod)) {
				nav.classList.add('nav--' + visibleMod);
			}
		}

		if (mqlMobile.matches) {
			setLogo('86px', '35px', 'mobile');

			if (nav.classList.contains('nav--' + visibleMod)) {
				toggle.classList.add('page-header__toggle--' + closeMod);
			}
		}

		if (mqlTablet.matches) {
			setLogo('114px', '48px', 'tablet');
		}

		if (mqlDesktop.matches) {
			setLogo('150px', '74px', 'desktop');
		}
	};

	toggle.addEventListener('click', evt => {
		toggleNav(evt);
	});

	matchMedia();

	window.addEventListener('resize', () => {
		matchMedia();
	});

});
