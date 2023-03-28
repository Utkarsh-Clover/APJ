$(document).ready(function () {
  // var Hheight = $('#header').outerHeight();
  // var Wheight = $(window).height();
  // var SubFheight = $('.sub_footer').outerHeight();
  // var Fheight = $('#footer').outerHeight() + SubFheight ;

  // var Innheight = Wheight - (Fheight + Hheight);

  // var newWindowWidth = $(window).width();
  // if (newWindowWidth >= 991) {
  //     $('.cms_section').css('min-height',Innheight);
  // }

  var Wheight = $(window).height();
  var HeadH = $("#header").outerHeight();
  $("body").css("padding-top", HeadH);

  $(".hero_sider_item").css("height", Wheight - HeadH);

  $(window).on("load", function (e) {
    checkScroll();
  });

  checkScroll();
  function checkScroll() {
    if ($(this).scrollTop() >= 1) {
      $(".header").addClass("is-sticky");
    } else {
      $(".header").removeClass("is-sticky");
    }
    if ($(this).scrollTop() >= 200) {
      $(".back_top").addClass("active");
      $(".header").addClass("head_shadow");
    } else {
      $(".back_top").removeClass("active");
      $(".header").removeClass("head_shadow");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1) {
        $(".header").addClass("is-sticky");
      } else {
        $(".header").removeClass("is-sticky");
      }
      if ($(this).scrollTop() >= 200) {
        $(".back_top").addClass("active");
        $(".header").addClass("head_shadow");
      } else {
        $(".back_top").removeClass("active");
        $(".header").removeClass("head_shadow");
      }
    });
  }

  $(".back_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $(".navbar-toggler").click(function () {
    $(this).toggleClass("menu-opened");
    $("#header .collapse:not(.show)").toggleClass("menu-show");
    $("body").toggleClass("scroll-off");
    $(".overlay").fadeToggle();
  });

  $(".overlay").click(function () {
    $(this).fadeToggle();
    $("#header .collapse:not(.show)").toggleClass("menu-show");
    $("body").toggleClass("scroll-off");
    $(".navbar-toggler").toggleClass("menu-opened");
  });

  $(".search_toggler_btn").click(function () {
    $(".lower_header form").addClass("active");

    $(".overlay").fadeOut();
    $("#header .collapse:not(.show)").removeClass("menu-show");
    $("body").removeClass("scroll-off");
    $(".navbar-toggler").removeClass("menu-opened");
  });

  $(".search_toggler_close").click(function () {
    $(".lower_header form").removeClass("active");
  });

  $(window).on("resize", function (e) {
    checkScreenSize();
  });
  var logo = $(".navbar-brand img").attr("src");

  checkScreenSize();
  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth <= 991) {
      $("#header .collapse:not(.show)").find(".mobile_logo").remove();
      $("#header .collapse:not(.show)").append(
        "<div class='mobile_logo'>" +
          "<img src=" +
          logo +
          " alt='logo'>" +
          "</div>"
      );
    }
  }

  $(".box-loader").fadeOut("slow");

  var Hheight = $("#header").outerHeight();
  var Fheight = $(".footer_wrapper").outerHeight();

  var Innheight = Wheight - (Fheight + Hheight);

  $(".cms_section").css("min-height", Innheight);
});
