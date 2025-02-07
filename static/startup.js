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

// set_theme_color sets given document root's custom property to theme color
function set_theme_color(property_name) {
    const root = document.documentElement;
    var color = getComputedStyle(root).getPropertyValue(property_name);
    root.style.setProperty("--theme-color", color);
}

// start_particles starts particles.js (https://vincentgarreau.com/particles.js/)
function start_particles() {
    set_theme_color("--theme-color-particles");

    var elementID = "page-header";
    document.getElementById(elementID).classList.add("particles-js");
    particlesJS(elementID, {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 176.37479644244019,
                "color": "#ffffff",
                "opacity": 0.2805962670675185,
                "width": 1.4430665163472378
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 400.851810096455,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.3  // 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// start_ripples starts jQuery Ripples (https://github.com/sirxemic/jquery.ripples/)
function start_ripples() {
    set_theme_color("--theme-color-ripples");

    var elementName = "#page-header";
    $(elementName).ripples({
        // imageUrl: null,
        // dropRadius: 20,
        // perturbance: 0.03,
        // resolution: 256,
        // interactive: true,
        // crossOrigin: "",
    });
	setInterval(function() {
		var $elememt = $(elementName);
		var x = Math.random() * $elememt.outerWidth();
		var y = Math.random() * $elememt.outerHeight();
		var radius = 20;
		var strength = 0.01 + Math.random() * 0.01;
		$elememt.ripples('drop', x, y, radius, strength);
	}, 400);
}

$(document).ready(function () {
    const now = new Date();
    var index = now.getMinutes() % 2;
    switch (index) {
    case 0:
        start_particles();
        break;
    default:
        start_ripples();
        break;
    }
});
