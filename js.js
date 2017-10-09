jQuery().ready(function() {

	$(".dropdown dd ul li img").each(function() {
		var cname = $(this).closest('li').attr("id");
		$(this).attr('src', "images/flags/"+cname+".png");
	});

	$(".dropdown img.flag").addClass("flagvisibility");
	$(".dropdown dt a").click(function() {
		$(".dropdown dd ul").toggle();
	});
	$(".dropdown dd ul li a").click(function() {
		var text = $(this).html();
		$(".dropdown dt a span").html(text);
		$(".dropdown dd ul").hide();
		$("#result").html("شما کشور: " + getSelectedValue("sample") + " را انتخاب کردید");
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a").html();
	}
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
	});
	$(".dropdown img.flag").toggleClass("flagvisibility");

});