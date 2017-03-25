$(document).ready(function() {
	$(window).resize(sizeCheck);
});

function sizeCheck(){	if($(".container").css("min-width") < "1250x") {
	$("#icon_toggle").removeAttr('checked');
	}
}
