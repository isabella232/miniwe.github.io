$(function() {
  // $('.ui.modal').modal('show');
  $('.project-item').on('click', function (event) {
    var $project = $(event.currentTarget);
    var $target = $('.ui.modal');
    console.log($('> .caption > a', $project));
    $('.header', $target).html($('> .caption > a', $project).html());
    $('.full-description', $target).html($('.full-description', $project).html());
    $('.gists', $target).html($('> .gist-list', $project).html());
    $target.modal('show');
  });
});
