//DOMContentLoaded 이벤트가 발생하는 시점은
//DOM-Tree 구성이 완료됐을 때
document.addEventListener('DOMContentLoaded', function() {
	//9개의 썸네일 선택
	const $thmbs = $('ul>li>a');
	const $screen = $('#screen');

	//썸네일에 대한 click 이벤트 등록
	$thmbs.forEach(function($thmb) {
		$thmb.addEventListener('click', function(evt) {
			evt.preventDefault();

			const imgSrc = attr(evt.currentTarget, 'href');

			attr($screen, 'src', imgSrc);
		});
	});
});
