document.addEventListener('DOMContentLoaded', function() {
	const $clickA = document.querySelectorAll('.gnb>li>a');
	const $screen = document.querySelector('.screen>img');
	// console.log($screen);
	$clickA.forEach(function(clickA) {
		clickA.addEventListener('click', function(evt) {
			evt.preventDefault();
			let imgSrc = this.getAttribute('href');
			$screen.setAttribute('src', imgSrc);
		});
	});
});
