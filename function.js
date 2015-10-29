$(document).on('ready', function() {


$(function() {
	//smoothScroll(300);

	awesomeLabels();



	});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body' ).animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}


function awesomeLabels() {
	 $('.contact-form .input-group input').focusOut(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');

      	}

      });

}



	
});


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.kwmlogo').css({
		'transform' : 'translate(0px, '+ wScroll /5.5 +'%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, '+ wScroll /3.5 +'%)'
	});

});


