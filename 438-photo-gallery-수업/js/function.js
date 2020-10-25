$(function() {
	const $thmbs = $('#slides>nav a');
	const img = [
		'images/big1.jpg',
		'images/big2.jpg',
		'images/big3.jpg',
		'images/big4.jpg',
		'images/big5.jpg',
		'images/big6.jpg',
		'images/big7.jpg',
		'images/big8.jpg',
		'images/big9.jpg'
	];

	//이벤트 등록
	$thmbs.click(function(evt) {
		//큰이미지정보
		const imgSrc = img[$thmbs.index(this)];
		$('#screen').css({ backgroundImage: 'url(' + imgSrc + ')' });
		evt.preventDefault();
	});
});
