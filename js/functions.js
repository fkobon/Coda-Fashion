(function($){})(window.jQuery);
   $(function(){
      $('#slider-id').codaSlider({
          dynamicTabs:false,
           dynamicArrows: false
      });
    });
$(document).ready(function (){
	 WebFontConfig = {
    google: { families: [ 'Droid+Sans::latin', 'Oswald::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
//$('.coda-slider-wrapper .coda-slider').slimScroll({
  //      height: '410px'
    //});


});

/* optional triggers

$(window).load(function() {

});

$(window).resize(function() {

});

*/
