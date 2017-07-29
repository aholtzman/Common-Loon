// name flicker landing page
$(document).ready(function() {
     setInterval(function() {
            var val = 1;
            if (Math.random() > 0.5) {
                val = Math.floor((Math.random()*10)+1);
            }
                
            $(".flicker").css("text-shadow", "white 0 0 " + val + "px");
     }, 200);
     setTimeout(function(){
     	$("#inner-box").fadeOut();
     	}, 8000);

    var $menuRevealBtn = $('#menu-reveal');

// audio player
	var audio;
	var playlist;
	var tracks;
	var current;

	init();
	function init(){
	    current = 0;
	    audio = $('audio');
	    playlist = $('#playlist');
	    tracks = playlist.find('li a');
	    len = tracks.length - 1;
	    audio[0].volume = .10;
	    playlist.find('a').click(function(e){
	        e.preventDefault();
	        link = $(this);
	        current = link.parent().index();
	        run(link, audio[0]);
	    });
	    audio[0].addEventListener('ended',function(e){
	        current++;
	        if(current == len){
	            current = 0;
	            link = playlist.find('a')[0];
	        }else{
	            link = playlist.find('a')[current];    
	        }
	        run($(link),audio[0]);
	    });
	};

	function run(link, player){
	        player.src = link.attr('href');
	        par = link.parent();
	        par.addClass('active').siblings().removeClass('active');
	        audio[0].load();
	        audio[0].play();
	};
});

//sid-nav bar controls
(function($) {
  $(document).ready(function() {
    var $menuRevealBtn = $('#menu-reveal');
    var $sideNav = $('#side-nav');
    var $sideNavMask = $('#side-nav-mask');
    
    $menuRevealBtn.on('click', function() {
      $sideNav.addClass('visible');
      $sideNavMask.addClass('visible');
    });
    
    $sideNavMask.on('click', function() {
      $sideNav.removeClass('visible');
      $sideNavMask.removeClass('visible');
    });
  });
})(jQuery);