// open_image_tab shows image on new tab
// usually used to imgur image
function open_image_tab(img) {
    var page = window.open();
    page.document.open();
    page.document.write('<html lang="ja"><head>');
    page.document.write('<title>' + img + '</title>');
    page.document.write('</head><body style="margin: 0; padding: 0;">');
    page.document.write('<img src="' + img + '" alt="' + img + '">');
    page.document.write('</body></html>');
    page.document.close();
}

$(document).ready(function () {
    // jQuery Ripples
    // https://github.com/sirxemic/jquery.ripples/
    $('.page-header').ripples({
        // imageUrl: null,
        // dropRadius: 20,
        // perturbance: 0.03,
        // resolution: 256,
        // interactive: true,
        // crossOrigin: "",
    });

	setInterval(function() {
		var $elememt = $('.page-header');
		var x = Math.random() * $elememt.outerWidth();
		var y = Math.random() * $elememt.outerHeight();
		var radius = 20;
		var strength = 0.01 + Math.random() * 0.01;

		$elememt.ripples('drop', x, y, radius, strength);
	}, 400);
});
