$(document).ready(function(){
  // tariffs toggle
  $('.js-a-tariffs-table-toggle').click(function(){
    $(this).toggleClass('is-active');
    $(this).parents('table').find('tr.is-hidden').toggleClass('is-active');
  });

  // work road toggle
  $('.js-a-work-road-moore').click(function(){
    $(this).toggleClass('is-active');
    $('.a-work-road__list').toggleClass('is-active');
    $('.a-work-road__list-item.is-hidden').toggleClass('is-active');
  });

  // slick slider init
  if ($('.js-a-tariffs-slider-init')[0]){
    $('.js-a-tariffs-slider-init').slick({
      arrows: false,
      adaptiveHeight: true,
      centerMode: true,
      dots: true,
      variableWidth: true
    });
  }
});