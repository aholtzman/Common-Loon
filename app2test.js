var audio;

$('.pause-button').hide();

initMusicPlayer($('.list li:first-child'));

function initMusicPlayer(e){
	var song = e.attr('song');
	audio = new Audio('music/' + song);

	audio.onended = function() {
		var current = $('.list li.active');
		var next = $('.list li.active').next();

    	if (next.length === 0) {
    		audio.pause();
        	current.removeClass('active');
        	$('.pause-button').hide();
			$('.play-button').show();
    	}

    	initMusicPlayer(next);
		audio.play();
		next.addClass('active').siblings().removeClass('active');

	};

};

$('.play-button').click(function() {
	audio.play();
	$('.play-button').hide();
	$('.pause-button').show();
});

$('.pause-button').click(function() {
	audio.pause();
	$('.pause-button').hide();
	$('.play-button').show();
});

$('.list li').click(function() {
	audio.pause();
	initMusicPlayer($(this));
	$('.play-button').hide();
	$('.pause-button').show();
	audio.play();
	$(this).addClass('active').siblings().removeClass('active');
});