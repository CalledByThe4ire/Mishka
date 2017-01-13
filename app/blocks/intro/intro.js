'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTabDesk = window.matchMedia('only screen and (min-width: 768px)');

	const intro = document.querySelector('.page--form .intro > p');

	if (mqlMobile.matches) {
		if (intro) {
			intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму заказа, и мы свяжемся с вами, чтобы уточнить детали.';
		}
	}

	if (mqlTabDesk.matches) {
		if (intro) {
			intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания!<br>Заполните простую форму заказа и' +
				' мы свяжемся с вами, чтобы уточнить детали.';
		}
	}

	window.addEventListener('resize', () => {
		if (mqlMobile.matches) {
			if (intro) {
				intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму заказа, и мы свяжемся с вами, чтобы уточнить детали.';
			}
		}

		if (mqlTabDesk.matches) {
			if (intro) {
				intro.innerHTML = 'Мы будем рады воплотить в жизнь ваши пожелания!<br>Заполните простую форму заказа и' +
					' мы свяжемся с вами, чтобы уточнить детали.';
			}
		}
	});
});
