/*
 * A jQuery plug in to accept only decimal  
 * 
 */

(function ($) {
	"use strict";
	
    $.fn.decimal = function (options) {
		
		var settings = $.extend({            
            isdecimal: false            
        }, options );
	 
	 return this.each(function () {
			$(this).on("keypress", function (evt) {
			
				var charCode = (evt.which) ? evt.which : event.keyCode;			
				var value = $(this).val(); // the current value	
				
				// For decimal input fields only one dot is accepted
				if (settings.isDecimal){
					if(value.length === 0 && charCode === 46)
						$(this).val("0");
					
					var dotcontains = value.indexOf(".") != -1;
					
					if (dotcontains)				
						if (charCode === 46) return false;
					
					if (charCode === 46) return true;				
				}
											
				if (charCode > 31 && (charCode < 48 || charCode > 57))
					return false;
				return true;								
			});
		});
	};
    
}(jQuery));
