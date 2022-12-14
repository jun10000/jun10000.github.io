function start_particles() {
    // particles.json is preloaded.
    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', '/particles.json');
}

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

window.addEventListener("DOMContentLoaded", start_particles);
