'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const icons = Array.prototype.slice.call(document.querySelectorAll('.icon'));
	const mainNavList = document.querySelector('.main-nav__list');

	let self;

	const toggleMainNavList = function (iconToggle) {

		if (typeof iconToggle !== 'string') {
			String(iconToggle);
		}
		self.closest('.main-nav__logo').classList.remove('main-nav__logo--visible');
		if (iconToggle === 'icon--open') {
			mainNavList.classList.remove('main-nav__list--visible');
		}else {
			mainNavList.classList.add('main-nav__list--visible');
		}

		icons.forEach(function (elem) {
			if (elem.classList.contains(iconToggle)) {
				elem.closest('.main-nav__logo').classList.add('main-nav__logo--visible');
			}
		});
	};

	Array.prototype.slice.call(document.querySelectorAll('.main-nav__link')).forEach(el => {
		if (el.contains(document.querySelector('.icon--close'))) {
			el.addEventListener('click', function () {
				self = this;
				toggleMainNavList('icon--open');
			});
		}
		if (el.contains(document.querySelector('.icon--open'))) {
			el.addEventListener('click', function () {
				self = this;
				toggleMainNavList('icon--close');
			});
		}
	});
});
