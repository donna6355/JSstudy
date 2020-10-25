$(function() {
	//declare
	const $idct = $('.slides-indicator>li>a');
	const $sldCnt = $('.slides-container');
	const $arrow = $('.slides-arrow>li>a');
	let posVal = [];

	//input posVal
	for (let i = 0; i < $idct.length; i++) {
		posVal[i] = i * -665;
	}

	//allocate $idct click then move $sldCnt
	$idct.click(function(evt) {
		evt.preventDefault();
		$sldCnt.stop().animate({ left: $idct.index(this) * -665 });
		//add or remove class at $idct
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	//index by class

	$arrow.eq(0).click(function(evt) {
		evt.preventDefault();
		let idx = $('.active').index();
		if (idx === 0) return;
		$sldCnt.animate({ left: posVal[idx - 1] });
		$idct.eq(idx - 1).parent().addClass('active').siblings().removeClass('active');
		// console.log(idx);
	});
	$arrow.eq(1).click(function(evt) {
		evt.preventDefault();
		let idx = $('.active').index();
		// console.log(idx);
		if (idx >= $idct.length) return;
		$sldCnt.animate({ left: posVal[idx + 1] });
		$idct.eq(idx + 1).parent().addClass('active').siblings().removeClass('active');
		// console.log(idx);
	});

	//too labory way
	//allocate $arrow back and forth
	/*
	$arrow.eq(0).click(function() {
		let left = $sldCnt.css('left');
		console.log(left, typeof left);
		switch (left) {
			case '0px':
				$sldCnt.animate({ left: posVal[0] });
				$idct.eq(0).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-665px':
				$sldCnt.animate({ left: posVal[0] });
				$idct.eq(0).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-1330px':
				$sldCnt.animate({ left: posVal[1] });
				$idct.eq(1).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-1995px':
				$sldCnt.animate({ left: posVal[2] });
				$idct.eq(2).parent().addClass('active').siblings().removeClass('active');
				break;
			default:
				console.log('');
		}
	});
	$arrow.eq(1).click(function() {
		let left = $sldCnt.css('left');
		switch (left) {
			case '0px':
				$sldCnt.animate({ left: posVal[1] });
				$idct.eq(1).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-665px':
				$sldCnt.animate({ left: posVal[2] });
				$idct.eq(2).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-1330px':
				$sldCnt.animate({ left: posVal[3] });
				$idct.eq(3).parent().addClass('active').siblings().removeClass('active');
				break;
			case '-1995px':
				$sldCnt.animate({ left: posVal[3] });
				$idct.eq(3).parent().addClass('active').siblings().removeClass('active');
				break;
			default:
				console.log('');
		}
	});*/
});
