/*
 * A jQuery plug in to prevent character
 * 
 */

(function ( $ ) {
 
    $.fn.preventCharacter = function (options) {

        var defaults = {
            eventType: "keypress",
            exclude: -1
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function () {
            $(this).on(settings.eventType, function (event) {
                if (settings.exclude > 0 && event.keyCode === settings.exclude) {
                    return false;
                }
            });
        });
    };	
}( jQuery ));
