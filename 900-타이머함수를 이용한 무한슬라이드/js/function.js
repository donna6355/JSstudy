$(function() {
	const $container = $('#slides > .slides-container');
	let intId = null;
	let timeId = null;

	//슬라이드 이동 함수 *애니메이션 시간은 dur 매개변수 이용
	const moveFn = function(dur) {
		const $container = $('#slides > .slides-container');
		$container.stop().animate({
			left: -200
		}, dur, 'linear', function() {
			$container.children('li').eq(0).appendTo($container);
			$container.css({ left: 0 });
		});
	};

	// 자동 슬라이드 이동 함수
	const Auto = function() {
		moveFn(7000);
		intId = setInterval(function() {
			moveFn(7000);
		}, 7010);
	};
	$(window).on('load', function() {
		Auto();
	});

	// 마우스효과
	$container.on({
		//마우스 오버시 인터벌 이벤트, 애니메이션, 타임아웃 클리어
		mouseenter: function() {
			clearInterval(intId);
			clearTimeout(timeId);
			$(this).stop();
		},
		mouseleave: function() {
			// 컨테이너 left 값 구하기
			let val = $container.css('left');
			// left 값이 '-00px' string이므로 px이전 값만 잘라내고 숫자로 변형
			val = parseInt(val.slice(0, val.indexOf('p')));
			// 200px 이동에 7000밀리세컨 => 1px 이동에 35밀리세컨
			// 남은 이동 시간 = 기본 200px에서 이미 이동한 val값을 뺀 거리 * 35밀리세컨
			val = (200 + val) * 35;
			//남은 부분 이동 함수 *남은 이동시간을 매개변수로 줄것
			moveFn(val);
			// moveFn 실행되는 시간 + 콜백함수를 불러오는 시간 약 10밀리세컨 후에 Auto 실행
			timeId = setTimeout(function() {
				console.log($container.css('left'));
				Auto();
			}, val + 10);
		}
	});
});
