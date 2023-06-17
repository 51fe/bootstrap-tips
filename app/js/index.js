$(function() {
  $('#confirmBtn').click(function() {
    confirm.show('确认要删除吗？', function() {
      console.log('你点击了确定按钮');
      setTimeout(function() {
        confirm.remove();
      }, 2000);
    })
  });

  $('#alertBtn').click(function() {
    alert.show('无权访问该页面，请重新登录', function() {
      console.log('你点击了确定按钮');
    })
  });

  App.initValidator();
  $('#loginModal').validate({
    submitHandler: function(form) {
      setTimeout(function() {
        $(form).modal('hide');
      }, 1000)
    }
  });

  $(document.body).on('click', '.dropdown-menu li', function(event) {
    var target = $(event.currentTarget);
    target.closest('.dropdown')
      .find('[data-bind="label"]').text(target.text()).attr('title', target.text())
      .children('.dropdown-toggle').dropdown('toggle');
  });

  $('.dropdown-menu li').each(function() {
    if ($(this).attr('selected')) {
      $(this).trigger('click');
    }
  });
});