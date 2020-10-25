$(function() {
	const $container = $('#slides > .slides-container');

	let intervalID = null;

	//슬라이드 한장이 이동하는 전체시간
	const duration = 7000;

	//남은시간
	let remainTime = duration;

	//경과된시간=멈춘시간-시작시간
	let gapTime = 0;

	//멈춘시간
	let pauseTime = 0;

	//시작시간
	let startTime = 0;

	//컨테이너 이동
	const moveFn = function() {
		startTime = new Date(); //시작시간

		//남은시간 계산
		remainTime -= gapTime;

		gapTime = 0;

		$container.stop().animate({
			left: -200
		}, remainTime, function() {
			$container.children('li').eq(0).appendTo($container);

			$container.css({ left: 0 });

			remainTime = duration;
		});
	};

	//자동재생 함수
	const autoStart = function() {
		moveFn();
		intervalID = setInterval(moveFn, 8000);
	};

	//재생멈춤 함수
	const autoStop = function() {
		$container.stop();
		clearInterval(intervalID);
	};

	//마우스 포인터에 의한 멈춤/진행 처리
	$container.on({
		mouseover: function() {
			pauseTime = new Date();

			gapTime = pauseTime - startTime;
			// console.log('경과된 시간 : ', gapTime);

			autoStop();
		},
		mouseout: function() {
			autoStart();
		}
	});

	$(window).on('load', function() {
		autoStart();
	});
});
