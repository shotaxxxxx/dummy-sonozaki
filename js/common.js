$(function() {

  window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
  };

    //ローディング画面のlogoの表示
    $(window).on('load',function(){
      $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
      $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
      $('#splash').addClass('loaded');
      });




  // ドロワーメニュー
  $('.js-button-hamburger').click(function() {
    $('body').toggleClass('is-active-drawer');
    $('.l-globalNav-fixed').toggleClass('is-globalNav');
    $('.logoShow').toggleClass('is-logoHidden');
    $('.logoHidden').toggleClass('is-logoShow');
    // $('body').toggleClass('is-active-fixed');
    
    if($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    } 
  });

  // ドロワーメニューのページ内リンククリックでドロワーメニュー閉じる
  $('.global-nav-item a').on('click',function() {
    $('body').removeClass('is-active-drawer');
    $('.l-globalNav-fixed').removeClass('is-globalNav');
    $('.logoShow').removeClass('is-logoHidden');
    $('.logoHidden').removeClass('is-logoShow');
  });


  var headerHeight = $('.l-header').outerHeight();
  var heroHeight = $('.hero').outerHeight();
  
  $(window).scroll(function() {

    var scroll = $(window).scrollTop();
      // スクロール後ヘッダー固定
    if(scroll > headerHeight + heroHeight) {
      $('.l-header-fixed').addClass('is-active-header');
    } else {
      $('.l-header-fixed').removeClass('is-active-header');
    }
  });

  var windowWidth = $(window).innerWidth();

  if(windowWidth < 992 ) {

    $(window).scroll(function() {
    // スクロール量によってナビメニュー色変更
    if($(window).scrollTop() < $('#service').offset().top) {
      $('.top').addClass('is-active-color');
    } else {
      $('.top').removeClass('is-active-color');
    }

    if($(window).scrollTop() > $('#service').offset().top && $(window).scrollTop() < $('#about').offset().top) {
      $('.service').addClass('is-active-color');
    } else {
      $('.service').removeClass('is-active-color');
    }

    if($(window).scrollTop() > $('#about').offset().top && $(window).scrollTop() < $('#works').offset().top) {
      $('.about').addClass('is-active-color');
    } else {
      $('.about').removeClass('is-active-color');
    }

    if($(window).scrollTop() > $('#works').offset().top && $(window).scrollTop() < $('#recruit').offset().top) {
      $('.works').addClass('is-active-color');
    } else {
      $('.works').removeClass('is-active-color');
    }

    if($(window).scrollTop() > $('#recruit').offset().top && $(window).scrollTop() < $('#contact').offset().top) {
      $('.recruit').addClass('is-active-color');
    } else {
      $('.recruit').removeClass('is-active-color');
    }

    if($(window).scrollTop() > $('#contact').offset().top) {
      $('.contact').addClass('is-active-color');
    } else {
      $('.contact').removeClass('is-active-color');
    }

    });
  }

  AOS.init()

});