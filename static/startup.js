function add_blank_attribute() {
    var links = document.links;

    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
       if (links[i].hostname != window.location.hostname) {
           links[i].target = '_blank';
       } 
    }
}

function start_particles() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

window.addEventListener("load", add_blank_attribute);
window.addEventListener("load", start_particles);
