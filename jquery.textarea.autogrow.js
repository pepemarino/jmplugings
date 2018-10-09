/*
 * A jQuery plug in to autogrow a textearea
 * 
 */

(function ($) {
	"use strict";
	
    $.fn.autogrow = function (options) {
		
		var settings = $.extend({ 
			minHeight : 0,
            maxHeight : 0 // no maximum
        }, options );
	 	 	
	 return this.each(function () {
		 
		// get the DOM element		
		var el = $(this).get(0);
		
		if(settings.minHeight > 0){
			console.log("style.minHeight " + settings.minHeight );
			el.style.cssText = 'min-height:' + settings.minHeight + 'px;'
		}
				
		el.addEventListener('keydown', function(){
			
			if($(this).is("input")) return;
										
			setTimeout(function(){
				if(settings.minHeight > 0){
					console.log("style.minHeight " + settings.minHeight );
					el.style.cssText = 'min-height:' + settings.minHeight + 'px;'
				}
				
				if(settings.maxHeight === 0 ||  (el.scrollHeight + 14) < (settings.maxHeight - settings.minHeight)){
					el.style.cssText = 'height:auto; padding:0';				
					el.style.cssText = 'height:' + (el.scrollHeight + 14) + 'px';
				}
			  },0); 
		 });
	 });
	};
    
}(jQuery));
