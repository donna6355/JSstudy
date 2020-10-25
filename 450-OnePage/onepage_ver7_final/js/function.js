$(function() {
	//변수선언부
	const $mnu = $('.gnb a');
	const articleTopVal = []; //각 article의 top 값을 저장하는 배열

	//scrollTop 값이 0인 상태에서 refresh 했을 때 활성화 표시
	$mnu.eq(0).parent().addClass('active');
	$('html,body').animate({ scrollTop: 0 });

	//반복문을 이용해서 article의 top값을 배열에 저장
	for (let i = 0; i < $mnu.length; i++) {
		articleTopVal[i] = $('article').eq(i).offset().top;
	}

	//메뉴에 대한 클릭 이벤트 구문
	$mnu.click(function(evt) {
		let nowIdx = $mnu.index(this);
		$('html,body').animate({ scrollTop: articleTopVal[nowIdx] });
		evt.preventDefault();
	});

	//scrollTop 값에 따른 메뉴활성화 표시
	$(window).scroll(function() {
		//현재 스크롤바의 Top 값을 가져온다.
		let scrollTop = $(window).scrollTop();

		//현재 Top값이 어떤 article 범위에 있는지 파악한다.
		// if (scrollTop >= articleTopVal[0]) {
		// 	$mnu.eq(0).parent().addClass('active').siblings().removeClass('active');
		// }
		// if (scrollTop >= articleTopVal[1]) {
		// 	$mnu.eq(1).parent().addClass('active').siblings().removeClass('active');
		// }

		for (let i = 0; i < $mnu.length; i++) {
			if (scrollTop >= articleTopVal[i]) {
				$mnu.eq(i).parent().addClass('active').siblings().removeClass('active');
			}
		}
	});
});
