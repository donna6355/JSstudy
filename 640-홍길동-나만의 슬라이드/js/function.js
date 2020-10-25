$(function() {
	let nowIdx = 0;
	const $item = $('.item>ul>li>a');
	const $mainCat = $('.catMain');
	const $text = $('.text>ul>li');
	const mainFn = function() {
		$mainCat.animate({ top: nowIdx * -600 });
		$text.eq(nowIdx).addClass('on').siblings().removeClass('on');
	};
	let intervalId = null;

	//careItem
	$item.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $item.index(this);
		if (nowIdx === 3) {
			nowIdx = 0;
			mainFn();
			clearInterval(intervalId);
		} else if (nowIdx === 1) {
			clearInterval(intervalId);
			nowIdx += 1;
			mainFn();
			let imgVal = 1;
			intervalId = setInterval(function() {
				if (imgVal === 6) {
					imgVal = 0;
					$('.dream').animate({ left: imgVal * -210 });
					imgVal++;
				} else {
					$('.dream').animate({ left: imgVal * -210 });
					imgVal++;
				}
			}, 1000);
		} else {
			nowIdx += 1;
			mainFn();
			clearInterval(intervalId);
		}
	});
});
