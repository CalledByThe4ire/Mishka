'use strict';

export default window.addEventListener('DOMContentLoaded', () => {

	const mqlMobile = window.matchMedia('only screen and (max-width: 767px)');
	const mqlTablet = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1149px)');
	const mqlDesktop = window.matchMedia('only screen and (min-width: 1150px)');

	/**
	 * Настройки для проигрывания видео
	 */
	const setupVideo = () => {

		const video = document.querySelector('.js_video');
		const play = document.querySelector('.js_play');

		/**
		 * Меняет значение атрибута в зависимости от размера окна браузера
		 */
		const matchMedia = () => {
			if (mqlMobile.matches) {
				video.setAttribute('poster', 'assets/images/video-mobile@2x.png');
			}

			if (mqlTablet.matches) {
				video.setAttribute('poster', 'assets/images/video-tablet.png');
			}

			if (mqlDesktop.matches) {
				video.setAttribute('poster', 'assets/images/video-desktop.png');
			}
		};

		if (video && play) {
			if (video.canPlayType) {
				video.removeAttribute('controls');
				document.querySelector('.js_video__controls').style.display = 'block';

				video.addEventListener('ended', () => {
					play.disabled = false;
					play.style.display = 'block';
				}, false);

				video.addEventListener('play', () => {
					play.disabled = true;
					play.style.display = 'none';
				}, false);

				play.addEventListener('click', () => {
					video.play();
				}, false);

				matchMedia();

				window.addEventListener('resize', () => {
					matchMedia();
				});
			}
		}
	};

	setupVideo();

});
