$(document).ready(function() {
	var $btnAuto = $('#slides>.btn-auto');
	var intervalID = null; //지금 현재 값을 알수없다.

	var $slides = $('#slides>.slides-container>li');
	var $indicator = $('#slides>.slides-pagination>li>a');
	var $sideBanr = $('#slides>.slides-container>li>a>div');
	let nowIdx = Math.floor(Math.random() * 7); //0~6 정수값

	//초기화작업
	$indicator.eq(nowIdx).parent().addClass('on');
	$slides.eq(nowIdx).addClass('on').show();
	$sideBanr.eq(nowIdx).css({ left: 70 });

	//다음 슬라이드의 인덱스번호 추출함수
	const nextIdx = function() {
		if (nowIdx < 6) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}
	};

	//다음버튼 클릭이벤트 등록
	$('.slides-next').on('click', function(evt) {
		autoStop();
		nextIdx();
		fadeFn();
		evt.preventDefault();
	});

	const fadeFn = function() {
		//인디케이터 활성화
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//이전슬라이드 사라짐
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');

		//모든 사이드배너를 #slides 바로 옆 왼쪽으로 이동
		$sideBanr.stop().animate(
			{
				left: -350
			},
			400,
			'easeInOutCubic'
		);

		//이번 나타날 슬라이드
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');

		//해당 사이드배너를 슬라이드 위로 이동
		$sideBanr.eq(nowIdx).stop().animate({
			left: 70
		});
	};

	//자동재생 함수
	const autoPlay = function() {
		intervalID = setInterval(function() {
			nextIdx();
			fadeFn();
		}, 2000);

		$btnAuto.addClass('pause').text('일시정지');
	};

	//재생정지 함수
	const autoStop = function() {
		clearInterval(intervalID);
		$btnAuto.removeClass('pause').text('자동재생');
	};

	autoPlay();

	//인디케이터 클릭 이벤트등록
	$indicator.on('click', function(evt) {
		autoStop();
		nowIdx = $indicator.index(this);
		fadeFn();
		evt.preventDefault();
	});

	//자동실행 클릭이벤트 등록
	$btnAuto.on('click', function(evt) {
		if ($(this).hasClass('pause')) {
			autoStop();
		} else {
			autoPlay();
		}

		evt.preventDefault();
	});
});
