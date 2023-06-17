$(function() {
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