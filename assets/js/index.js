 (function ($) {
    "use strict";
     
    $(document).ready(function(){

        $(".post-content").fitVids();
    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
hljs.initHighlightingOnLoad();
/*
window.addEventListener('load',function(){
    var link = document.createElement('link');
    link.href= "https://fonts.googleapis.com/css?family=Lato:100,300,300italic,400,700&subset=latin-ext";
    link.rel = "stylesheet";
    link.type = "text/css";
    var link1 = document.getElementsByTagName('link')[0];
    link1.parentNode.insertBefore(link,link1);
})*/