$(function() {
	const $mnu = $('header > nav > .gnb > li > a');
	const $article = $('article');
	const arrTopVal = [];
	let nowIdx = 0;

	const goTopFn = function() {
		$('html, body').stop().animate(
			{
				scrollTop: 0
			},
			'easeInOutCubic'
		);
	};
	//:even은 인덱스 기준으로 0,2,4....
	$article.filter(':even').css({ backgroundColor: '#ffc90e' });
	$article.filter(':odd').css('background-color', '#ff0');

	goTopFn(); //시작하자마자 맨처음으로 이동

	for (let i = 0; i < $mnu.length; i++) {
		arrTopVal[i] = $('article').eq(i).offset().top;
	}

	console.log(arrTopVal);

	//로고 이벤트 등록
	$('h1>a').on('click', function(evt) {
		goTopFn();
		evt.preventDefault();
	});

	//메뉴 이벤트 등록
	$mnu.on('click', function(evt) {
		nowIdx = $mnu.index(this);

		$('html, body').stop().animate(
			{
				scrollTop: arrTopVal[nowIdx] - 69
			},
			'easeInOutCubic'
		);

		evt.preventDefault();
	});

	//스크롤 이벤트의 주체는 항상 window
	$(window).on('scroll', function() {
		//현재 스크롤탑 값
		let scrollTop = $(this).scrollTop();

		//각 article의 top값과 비교
		for (let i = 0; i < $mnu.length; i++) {
			if (scrollTop >= arrTopVal[i] - 69) {
				$mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
				$('header').addClass('h-fixed');
				$('header+section').css({ marginTop: 69 });
			} else if (scrollTop < arrTopVal[0] - 69) {
				$mnu.parent().removeClass('on');
				$('header').removeClass('h-fixed');
				$('header+section').css({ marginTop: 0 });
			}
		}
	});
});
