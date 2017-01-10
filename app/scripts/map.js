'use strict';

const initMap = () => {
	const myLatLng = {lat: 59.9387942, lng: 30.3230833};
	const LatCenter = {lat: 59.9397940, lng: 30.3230833};

	const mapOptions = {
		zoom: 15,
		center: LatCenter
	};

	const isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));

	const map = new google.maps.Map(document.querySelector('js_map'), mapOptions);

	const markerImage = {
		url: isIE11 ? '../images/map-pin.png' : '../images/map-pin.svg',
		size: new google.maps.Size(100, 100),     // original size you defined in the SVG file
		scaledSize: new google.maps.Size(35, 35), // desired display size
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(20, 20),
		optimized: false,
		zIndex: 1
	};

	const marker = new google.maps.Marker({
		position: myLatLng,
		map,
		icon: markerImage,
		title: 'HTML Academy'
	});

	google.maps.event.addDomListener(window, 'resize', function () {
		const center = map.getCenter();
		google.maps.event.trigger(map, 'resize');
		map.setCenter(center);
	});

	marker.setMap(map);
};

export default initMap;
