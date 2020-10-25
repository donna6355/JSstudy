document.addEventListener('DOMContentLoaded', function() {
	const $anchor = document.querySelectorAll('ul>li>a');
	const $screen = document.querySelector('.frame');

	$anchor.forEach(function(anchor) {
		anchor.addEventListener('click', function(click) {
			click.preventDefault();
			let imgSrc = this.getAttribute('href');
			$screen.style.backgroundImage = 'url(' + imgSrc + ')';
		});
	});
});
