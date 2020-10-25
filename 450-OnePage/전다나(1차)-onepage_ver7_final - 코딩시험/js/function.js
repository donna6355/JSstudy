$(function() {
	//변수를 선언하시오
	//메뉴에 대한 DOM변수
	const $menu = $('.gnb>li>a');
	//article의 top값을 저장할 배열변수 articleTopVal
	let articleTopVal = [];

	//기초작업
	//scrollTop 값이 0인 상태일때 첫번째 메뉴 활성화 표시
	$menu.eq(0).parent().addClass('active');
	//reflash 했을때 페이지의 맨처음으로 이동
	$('html,body').animate({ scrollTop: 0 });
	//반복문을 이용해서 article의 top값을 배열에 저장
	for (let i = 0; i < $menu.length; i++) {
		articleTopVal[i] = $('article').eq(i).offset().top;
	}

	//클릭이벤트 등록
	// $menu.click(function(evt) {
	// 	evt.preventDefault();
	// 	let idx = $menu.index(this);
	// 	$('html,body').animate({ scrollTop: articleTopVal[idx] });
	// });
	for (let i = 0; i < $menu.length; i++) {
		$menu.eq(i).click(function(evt) {
			evt.preventDefault();
			$('html,body').animate({ scrollTop: articleTopVal[i] });
		});
	}

	//스크롤이벤트 등록
	//scrollTop 값에 따른 메뉴활성화 표시
	$(window).scroll(function() {
		let scrollVal = $(window).scrollTop();
		// console.log(scrollVal);
		for (let i = 0; i < $menu.length; i++) {
			if (scrollVal >= articleTopVal[i]) {
				$menu.eq(i).parent().addClass('active').siblings().removeClass('active');
			}
		}
	});
});
