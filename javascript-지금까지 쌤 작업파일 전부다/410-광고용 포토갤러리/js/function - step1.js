// alert('연결성공~!'); //js,html 연결잘됐는지 확인하려고...

/*
  알고리즘 = 로직 = 시나리오 = 순서도 = 레시피
  같은의미/다른표현 : 요소=태그=엘리먼트=선택자=DOM=Node

  JS에서 가장 중요한 것 : 누구에게, 무엇을, 어떻게 ...

  1. 썸네일을 누른다. 
    썸네일을 나타내는 DOM변수 생성
    ul>li>a를 click 한다. => click 이벤트 등록

  2. a 눌렀을 때 a의 기본기능이 작동되는 것을 막는다.

  3. 큰 이미지가 변한다.
    1) 이번에 클릭한 a의 href 속성값을 가져와서....
    2) #screen 요소의 src 속성값으로 넣어준다.

*/

//DOMContentLoaded 이벤트가 발생하는 시점은
//DOM-Tree 구성이 완료됐을 때
document.addEventListener('DOMContentLoaded', function(evt) {
	//썸네일 DOM변수 선언
	const doc = document;
	const $thmb_0 = doc.querySelector('ul>li:nth-child(1)>a');
	const $thmb_1 = doc.querySelector('ul>li:nth-child(2)>a');
	const $thmb_2 = doc.querySelector('ul>li:nth-child(3)>a');
	const $thmb_3 = doc.querySelector('ul>li:nth-child(4)>a');
	const $thmb_4 = doc.querySelector('ul>li:nth-child(5)>a');
	const $thmb_5 = doc.querySelector('ul>li:nth-child(6)>a');
	const $thmb_6 = doc.querySelector('ul>li:nth-child(7)>a');
	const $thmb_7 = doc.querySelector('ul>li:nth-child(8)>a');
	const $thmb_8 = doc.querySelector('ul>li:nth-child(9)>a');

	const $screen = doc.querySelector('#screen');

	//이벤트 등록 => 확인하는 작업
	$thmb_0.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_0.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_1.addEventListener('click', function(evt) {
		//alert('잘 등록됨');

		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_1.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_2.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_2.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_3.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_3.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_4.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_4.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_5.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_5.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_6.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_6.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_7.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_7.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});

	$thmb_8.addEventListener('click', function(evt) {
		//앵커태그의 기본기능 작동을 막는다.
		evt.preventDefault();

		//이번에 클릭한 요소의 href 속성값을 가져온다.
		const imgSrc = $thmb_8.getAttribute('href');
		// console.log(imgSrc);

		//#screen 요소의 src 속성값으로 넣어준다.
		$screen.setAttribute('src', imgSrc);
	});
});
