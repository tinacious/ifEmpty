/*
 *  Tinacious Replace if Empty jQuery plugin
 *  Plugin URL: https://github.com/tinacious/ifEmpty
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
 (function($){
	$.fn.extend({
		replaceIfEmpty: function(options) {
			var defaults = {
				// Items to count inside target
				item: 'li',
				// Element to replace if the target is empty
				elementToReplace: '', // $(this)
				// Replace with the following HTML
				replaceWithThis: ''
			}
			var options = $.extend(defaults, options);
			return this.each(function(){
				var obj = $(this);
				
				var itemCount = obj.find(defaults.item).length;

				if(itemCount < 1) {
					if(defaults.elementToReplace == '') {
						obj.replaceWith(defaults.replaceWithThis);
					} else {
						$(defaults.elementToReplace).replaceWith(defaults.replaceWithThis);
					}
				}
			});
		}
	});
})(jQuery);