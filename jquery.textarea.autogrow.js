﻿/*
 * A jQuery plug in to autogrow a textearea
 * this is jumpy
 */

(function ($) {
	"use strict";
	
    $.fn.autogrow = function (options) {					 
	 return this.each(function () {
		 var settings = $.extend({ 			
            maxHeight : 0 // no maximum
        }, options );
		
		// get the DOM element		
		var el = $(this).get(0);				
		el.addEventListener('keydown', function(){			
			if($(this).is("input")) return;									
			setTimeout(function(){							
				if(settings.maxHeight === 0 ||  (el.scrollHeight + 14) < settings.maxHeight){
					el.style.cssText = 'height:auto; padding:0';				
					el.style.cssText = 'height:' + (el.scrollHeight + 14) + 'px';
				}
			  },0); 
		 });
	 });
	};
    
}(jQuery));
