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
});