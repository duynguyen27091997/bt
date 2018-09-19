$(function() {
    $(document).on('click','.lentren', function() {

        $("html,body").animate({ scrollTop: 0 }, 1000);

    });

	$(window).on('scroll', function(event) {
		if (window.pageYOffset > 200) {
	        var a = document.getElementsByClassName("backtotop")[0];
	        a.classList.add('lentren')
	    }
	    if (window.pageYOffset < 200) {
	        var a = document.getElementsByClassName("backtotop")[0];
	        a.classList.remove('lentren')
	    }
	});
});
