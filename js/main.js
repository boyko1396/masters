$(document).ready(function(){
  // header dropdown toggle
  $('.js-work-road-moore').click(function(){
    $(this).toggleClass('is-active');
    $('.a-work-road__list').toggleClass('is-active');
    $('.a-work-road__list-item.is-hidden').toggleClass('is-active');
  });
  // header dropdown toggle
  $('.js-work-road-moore-inline').click(function(){
    $(this).toggleClass('is-active');
    $('.a-work-r').toggleClass('is-active');
  });
  // header dropdown toggle
  $('.js-tariffs-table-toggle').click(function(){
    $(this).toggleClass('is-active');
    $(this).parents('table').find('tr.is-hidden').toggleClass('is-active');
  });
});