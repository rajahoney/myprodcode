$(window).resize(function() {
	if($(window).width() < 768 ) {
			$('.bannerimgoveraide').attr('src','images/mobile/apply_hero_mobile_1242.jpg');
			$('.mobilephoto').attr('src','images/mobile/apply_ready_to_apply_banner_mobile.jpg');
	}
	if($(window).width() > 768 ) {
			$('.bannerimgoveraide').attr('src','images/apply_hero_desktop_1600.jpg');
			$('.mobilephoto').attr('src','images/applybgtheme.jpg');
	}
});