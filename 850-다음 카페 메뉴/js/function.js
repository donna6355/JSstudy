$(function() {
	/* 
  declare DOM variable
  add click event
  state event handler - add class to clicked attr and remove class from others
  */

	const $gnb = $('.gnb>li>a');
	$gnb.on('click', function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
});
