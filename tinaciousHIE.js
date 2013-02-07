/*
 *  Tinacious Hide Element if Empty jQuery plugin
 *  Plugin URL: https://github.com/tinacious/ifEmpty
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
 (function($){
	$.fn.extend({
		hideIfEmpty: function(options) {
			var defaults = {
				// Items to count inside target
				item: 'li',
				// Selector of element to hide
				elementToHide: '' // $(this)
			}
			var options = $.extend(defaults, options);
			return this.each(function(){
				var obj = $(this);
				
				var itemCount = obj.find(defaults.item).length;

				if(itemCount < 1) {
					if(defaults.elementToHide == '') {
						obj.hide();
					} else {
						$(defaults.elementToHide).hide();
					}
				}
			});
		}
	});
})(jQuery);