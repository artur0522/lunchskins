$(document).ready(function () {

  function debounce(callback, ms) {
    var timer = 0;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }
  
  
  // update the attributes
  
  $('#had_help').keyup(debounce(function (e) {
    jQuery.post('/cart/update.js', "attributes[_had_help]="+this.value);
  }, 500));
});