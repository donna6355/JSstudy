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
document.addEventListener('DOMContentLoaded', function() {
	//9개의 썸네일 선택
	const $thmbs = document.querySelectorAll('ul>li>a');
	const $screen = document.querySelector('#screen');

	//썸네일에 대한 click 이벤트 등록
	$thmbs.forEach(function($thmb) {
		$thmb.addEventListener('click', function(evt) {
			evt.preventDefault();
			const imgSrc = this.getAttribute('href');
			$screen.setAttribute('src', imgSrc);
		});
	});

	//forEach() 학습내용
	const number = [10, 20, 30, 40, 50, 60, 70, 80];

	//배열 출력 방법-1
	for (let i = 0; i < number.length; i++) {
		//console.log(number[i]);
	}

	//배열 출력 방법-2
	for (let i in number) {
		//console.log(number[i]);
	}

	//배열 출력 방법-3
	number.forEach(function(num) {
		console.log(num + ' forEach');
	});
});
