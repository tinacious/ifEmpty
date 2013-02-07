/*
 *  Tinacious Add Class if Empty jQuery plugin
 *  Plugin URL: https://github.com/tinacious/ifEmpty
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
(function($){
	$.fn.extend({
		addClassIfEmpty: function(options) {
			var defaults = {
				// Items to count inside target
				item: 'li',
				// Class to add to the specified element
				classToAdd: 'empty'
				// Element to add the class to
				elementToChange: '' // $(this)
			}
			var options = $.extend(defaults, options);
			return this.each(function(){
				var obj = $(this);
				
				var itemCount = obj.find(defaults.item).length;

				if(itemCount < 1) {
					if(defaults.elementToChange == '') {
						obj.addClass(defaults.classToAdd);
					} else {
						$(defaults.elementToChange).addClass(defaults.classToAdd);
					}
				}
			});
		}
	});
})(jQuery);