/**
 * 警告框
 */
var alert = {
  /**
   * 显示警告框
   * @param message
   * @param callback
   */
  show: function(message, callback) {
    var html = '<form class="modal fade center-block" id="alertModal" tabindex="-1"' +
      'role="dialog" aria-hidden="true" data-backdrop="static">' +
      '<div class="modal-dialog modal-sm">' +
      '<div class="modal-content">' +
      '<div class="modal-body">' + message + '</div>' +
      '<div class="modal-footer center-block" align="center">' +
      '<button type="submit" class="btn btn-primary center-block">我知道了</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</form>';

    $(document.body).append(html);

    $('#alertModal').modal('show').on('hide.bs.modal', function() {
      $(this).remove();
    }).submit(function(e) {
      e.preventDefault();
      alert.remove();
      if (typeof callback === 'function') {
        callback();
      }
    });
  },

  /**
   * 移除警告框
   */
  remove: function() {
    $('#alertModal').modal('hide');
  }
};
