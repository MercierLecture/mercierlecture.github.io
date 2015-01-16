
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var latlang = new google.maps.LatLng(43.65104, -79.37456);
var myOptions = {
    zoom: 15,
    zoomControl: true,
    scaleControl: true,
    scrollwheel: false,
    center: latlang,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
var marker = new google.maps.Marker({
      position: latlang,
      icon: 'http://i.imgur.com/kjE3Nq8.png',
      map: map,
      
  });

