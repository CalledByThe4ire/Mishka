'use strict';

export default window.addEventListener('DOMContentLoaded', () => {
	const textField = Array.prototype.slice.call( document.querySelectorAll('.text-field .text-field__input') );
	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');

	const email = document.querySelector('input[type=\'email\']');

	/**
	 * Добавляет / убирает класс у элемента,
	 * который является родителем для поля ввода
	 * @param {MouseEvent} evt
	 */
	const toggleFocus = evt => {
		if (evt.target === document.activeElement) {
			evt.target.parentElement.classList.add('text-field__container--focus');
		}else {
			evt.target.parentElement.classList.remove('text-field__container--focus');
		}
	};

	if (textField) {
		textField.forEach(el => {
			('focus blur'.split(' ')).forEach( evt => el.addEventListener(evt, toggleFocus) );
		});
	}

	if (mqlMobile.matches) {
		if (email) {
			email.setAttribute('placeholder', 'Ваш e-mail');
		}
	}

	if (mqlTabDesk.matches) {
		if (email) {
			email.setAttribute('placeholder', 'Мы не будем спамить, честно!');
		}
	}

	window.addEventListener('resize', () => {
		if (mqlMobile.matches) {
			if (email) {
				email.setAttribute('placeholder', 'Ваш e-mail');
			}
		}

		if (mqlTabDesk.matches) {
			if (email) {
				email.setAttribute('placeholder', 'Мы не будем спамить, честно!');
			}
		}
	});
});
