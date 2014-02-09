/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
	"use strict";
	var
		$slideshow=$('.slideshow'),
		$images=$slideshow.find('.slides'),
		$prevBtn=$slideshow.find('.prev'),
		$nextBtn=$slideshow.find('.next'),
		currentSlide=0;
	
		$nextBtn.click(function(){
			$images.eq(currentSlide).removeClass('active');
			$('.unactive').removeClass('unactive');
			$images.eq(currentSlide).addClass('unactive');
			$images.eq(currentSlide+1).addClass('active');
			currentSlide=currentSlide+1;
			if (currentSlide>=$images.length){
				currentSlide=0;
				$images.eq(currentSlide).addClass('active');
			};
		});
		$prevBtn.click(function(){
			$images.eq(currentSlide).removeClass('active');
			$('.unactive').addClass('active');
			$('.unactive').removeClass('unactive');
			currentSlide=currentSlide-1;
			$images.eq(currentSlide-1).addClass('unactive');
			if (currentSlide<0) {
				currentSlide=3;
			};

		});

		/*$prevBtn.click(function(){

			$('.active').removeClass('active');
			$images.eq(lastSlide).addClass('active');
			$images.eq(lastSlide).removeClass('unactive');
			$images.eq(lastSlide-1).addClass('unactive');
			lastSlide=lastSlide-1;
			if(lastSlide<0) {
				lastSlide=3;
				$images.eq(lastSlide).addClass('unactive');
			}
		});*/


		
		

})(window.Zepto || window.jQuery);