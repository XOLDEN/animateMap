var i = 0;
while (i<100) {
	$('#animate').fadeIn(1000);
	$('#animate').delay(3000);
	$('#animate').fadeOut(1000);
	$('#animate').delay(7000);

	i++;
}
var r = 0;
while (r<100) {
	$('#animateTwo').hide(0);
	$('#animateTwo').delay(3000);
 	$('#animateTwo').fadeIn(500);
	$('#animateTwo').delay(3000);
	$('#animateTwo').fadeOut(1000);
	$('#animateTwo').delay(4500);
	r++;
}