$('.svg__group').mousemove(function(e){
    var id = $(this).attr('data')
    var X = e.pageX;
    var Y = e.pageY;
	var top = Y  - 205 + 'px';
	var left = X  + 32 + 'px';
	$('.hint-outer').css({
        display:"block",
        top: top,
        left: left
    });
    $('.svg__item--'+id).css({
    opacity:0.6,
    });
    $('.number--'+id).css({
        opacity:1,
    });
});
$('.svg__group').mouseout (function(){
    var id = $(this).attr('data')
    $('.svg__item--'+id).css({
        opacity:0,
    });
    $('.number--'+id).css({
        opacity:0,
    });
	$('.hint-outer').css({
		display:"none"
	});
});

$('.button-list__item').mousemove(function(){
	var id = $(this).attr('data')
    $('.svg__item--'+id).css({
        opacity:0.6,
    });
    $('.number--'+id).css({
        opacity:1,
    });
});
$('.button-list__item').mouseout (function(){
	var id = $(this).attr('data')
    $('.svg__item--'+id).css({
        opacity:0,
    });
    $('.number--'+id).css({
        opacity:0,
    });
});