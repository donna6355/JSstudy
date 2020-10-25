$(function() {
	const $gnb = $('#gnb>li');
	const $lang = $('.lang');
	const $selLang = $('header > .container > .lang > ul > li>a');
	const $slide = $('#bnr > .slide > li');
	const $side = $('.side');
	const $pagination = $('.pagination>li>a');
	let nowIdx = 0;
	console.log($slide);

	let langTxt = $('header > .container > .lang > ul > li.on > a').text();
	$('.selLang').text(langTxt);

	const slideFn = function() {
		$slide.filter('.on').stop().fadeOut().removeClass('on');
		$slide.eq(nowIdx).stop().fadeIn().addClass('on');
		$side.filter('.on').css({ right: -600 }).removeClass('on');
		$side.eq(nowIdx).animate({ right: 0 }, 1000).addClass('on');
		$pagination.filter('.on').removeClass('on');
		$pagination.eq(nowIdx).addClass('on');
	};

	slideFn();

	$lang.on('click', function() {
		if ($(this).hasClass('on')) {
			$('header > .container > .lang > .selLang + span > a').css({
				transform: 'rotate(-270deg)'
			});
			$('header > .container > .lang > ul').show();
			$(this).removeClass('on');
		} else {
			$('header > .container > .lang > .selLang + span > a').css({
				transform: 'rotate(-90deg)'
			});
			$('header > .container > .lang > ul').hide();
			$(this).addClass('on');
		}
	});

	$selLang.on('click', function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');
		let langTxt = $('header > .container > .lang > ul > li.on > a').text();
		$('.selLang').text(langTxt);
		let char = langTxt.length;
		console.log(char);
		if (char > 15) {
			$('.selLang').css({ width: 200 });
		} else {
			$('.selLang').css({ width: 108 });
		}
	});

	$gnb.on('mouseenter', function() {
		$('.lnbBg').stop().fadeIn();
		$(this).children('.lnb').stop().fadeIn();
		$('header > .navCont > nav').css({ borderBottom: '1px solid #777' });
	});
	$gnb.first().on('mouseenter', function() {
		$('.lnbBg').stop().hide();
		$('header > .navCont > nav').css({ borderBottom: '0' });
	});
	$gnb.on('mouseleave', function() {
		$('.lnbBg').stop().fadeOut();
		$(this).children('.lnb').stop().fadeOut();
		$('header > .navCont > nav').css({ borderBottom: '0' });
	});

	$('.btn>li:first-child>a').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = $slide.length - 1;
		} else {
			nowIdx--;
		}
		slideFn();
	});
	$('.btn>li:last-child>a').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === $slide.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		slideFn();
	});

	$pagination.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $pagination.index(this);
		slideFn();
	});
});
