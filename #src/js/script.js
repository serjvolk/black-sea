$(document).ready(function () {
	// Для работы бургер - меню
	$(".header__burger").click(function(){
		$(".header__burger,.header__menu").toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Подключаем slick - слайдер
	$('.slider').slick({
		arrows: false, // Показывать стрелки. По умолчанию true
		dots: true, // Показывать точки. По умолчанию false
	});

	// Показываем карту google-maps
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 46.463, lng: 30.744},
	  zoom: 14
	});
	var marker = new google.maps.Marker({position: {lat: 46.469058, lng: 30.711897}, map: map});
	
	setTimeout(function() { // Убираем всплывеющее окно от google maps
		$('.dismissButton').click();
	}, 3000);
});