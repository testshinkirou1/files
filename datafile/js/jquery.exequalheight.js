(function($){
	$.fn.exEqualHeight = function(){
		var api = this.exResize({
			api : true,
			contentsWatch : true,
			callback : function(){
				adjust( api );
			}
		});
		var adjust = function(api){
			var maxHeight = 0;
			api.each(function(){
				height = this.getSize().height;
				maxHeight = height > maxHeight ? height : maxHeight;
			});
			api.getTargets().height(maxHeight);
		};
		adjust( api );
	};

})(jQuery);
