$(function () {

  new WOW().init();

  /*-----------------------------------------
  hamburger
  ----------------------------------------*/
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
    $("body").toggleClass("is-fixed");
  });
  $('.nav-link').on('click', function () {
    $('.js-toggle-sp-menu').toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
    $('.header-nav--sp').on('click', function () {
    $('.js-toggle-sp-menu').toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
    });




/*-----------------------------------------
スクロール
----------------------------------------*/
  $(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


/*-----------------------------------------
アニメーション
----------------------------------------*/

$(function () {
  /* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  );
});






});


});
