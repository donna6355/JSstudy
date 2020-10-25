$(function() {
	//variables
	const $mnu = $('.gnb>li>a');
	const atcVal = [];

	//input atcVal array
	for (let i = 0; i < $mnu.length; i++) {
		atcVal[i] = $('article').eq(i).offset().top;
	}

	//once refresh back to atcVal[0], add class
	$mnu.eq(0).parent().addClass('active');
	$('html,body').animate({ scrollTop: atcVal[0] });

	//allocate atcVal scroll animation to $mnu click
	for (let i = 0; i < $mnu.length; i++) {
		$mnu.eq(i).click(function(evt) {
			evt.preventDefault();
			$('html,body').animate({ scrollTop: atcVal[i] });
		});
	}

	//add or remove class according to scrVal
	$(window).scroll(function() {
		let scrVal = $(window).scrollTop();
		for (let i = 0; i < $mnu.length; i++) {
			if (scrVal >= atcVal[i]) {
				$mnu.eq(i).parent().addClass('active').siblings().removeClass('active');
			}
		}
	});
});
