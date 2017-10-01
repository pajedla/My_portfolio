$(document).ready(function() {
		$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
		});
		});