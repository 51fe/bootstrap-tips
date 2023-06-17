$(function() {
  App.initValidator();
  $('#loginForm').validate({
    submitHandler: function(form) {
      setTimeout(function() {
        $(form).modal('hide');
      }, 1000)
    }
  });
});