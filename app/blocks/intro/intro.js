'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');

	const intro = document.querySelector('.page--form .intro > p');

	/**
	 * Меняет значение атрибута в зависимости от размера окна браузера
	 */
	const matchMedia = () => {
		if (intro) {
			if (mqlMobile.matches) {
				intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму заказа, и мы свяжемся с вами, чтобы уточнить детали.';
			}

			if (mqlTabDesk.matches) {
				intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания!<br>Заполните простую форму заказа и' +
					' мы свяжемся с вами, чтобы уточнить детали.';
			}
		}
	};

	matchMedia();

	window.addEventListener('resize', () => {
		matchMedia();
	});
});
