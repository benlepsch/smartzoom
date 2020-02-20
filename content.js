let lastWidth = $(window).width();
let currentZoom = 100;

function alreadyOn() {
    if (!window.location.href.includes('http://v-vv-vv.tech') && !window.location.href.includes('216.197.76.25')) {
        return false;
    }
    return true;
}

function checkZoomed() {
    if (alreadyOn()) {
        return;
    }

    let currentWidth = $(window).width();

    if (currentWidth != lastWidth) {
        lastWidth = currentWidth;
        currentZoom += (Math.random() >= 0.5 ? 20 : -20);
        currentZoom = (currentZoom <= 0) ? 1 : currentZoom;
        $('body').css('zoom', ' ' + currentZoom + '%');
    }
    
    setTimeout(checkZoomed, 1000);
}

checkZoomed();