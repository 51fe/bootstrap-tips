var App = {
  /**
   * 初始化验证
   */
  initValidator: function() {
    $.extend($.validator.defaults, {
      errorElement: 'span',
      errorClass: 'help-block',
      focusInvalid: false,
      ignore: "",

      highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
      },

      errorPlacement: function(error, element) {
        if (element.closest('.input-icon').size() == 1) {
          error.insertAfter(element.closest('.input-icon'));
        } else if (element.closest('.input-group').size() == 1) {
          error.insertAfter(element.closest('.input-group'));
        } else {
          error.insertAfter(element);
        }
      }
    });
  }
};