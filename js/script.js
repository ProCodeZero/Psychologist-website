$(".scrollto a").on("click", function () {
	let href = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400»
		easing: "linear" // по умолчанию «swing»
	});

	return false;
});

$("a[href^='#']").on("click", function () {
	let href = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(href).offset().top
	});

	return false;
});

const burger = document.querySelector('.header__burger');
if (burger){
	const navigation = document.querySelector('.navigation__list');
	burger.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		navigation.classList.toggle('_active');
	})
}