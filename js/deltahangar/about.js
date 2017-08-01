$(window).resize(function() {
	if($(window).width() < 768 ) {
			$('.bannerimgoveraide').attr('src','images/mobile/about_hero_mobile_1242.jpg');
			$('.bannerimges ').attr('src','images/mobile/aboutpagebottom.png');
	}
	if($(window).width() > 768 ) {
			$('.bannerimgoveraide').attr('src','images/about_hero_desktop_1600.jpg');
			$('.bannerimges ').attr('src','images/aboutus_hightlights.jpg');
	}
});