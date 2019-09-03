var id_menu = $("#menu"),
  id_responsiveDisplay = $("#responsiveDisplay"),
  id_slideshow = $("#slideshow"),
  id_item_details_image = $(".item-details-image"),
  site_container = $(".site-container"),
  site_pusher = $(".site-container .site-pusher"),
  body = $("body"),
  id_header__icon = $("#header__icon"),
  id_site_cache = $("#site-cache"),
  class_select = $(".select"),
  class_menu_link = $(".menu-link"),
  class_container_nubian = $(".container-nubian"),
  class_dpmenu_brand = $(".dpmenu_brand"),
  class_menu_brand_a = $(".menu_brand a"),
  class_dpmenu_categ = $(".dpmenu_categ"),
  class_menu_categ = $(".menu_categ a"),
  class_dpmenu_sale = $(".dpmenu_sale"),
  class_dpmenu_sale_a = $(".dpmenu_sale a");
id_responsiveDisplay.slick({
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

id_slideshow.slick({
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// id_item_details_image.slick({
// 	infinite: false,
// 	speed: 500,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	autoplay: false,
// 	autoplaySpeed: 2500,
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		}
// 	]
// });

$(function() {
  var slider = "#slider"; // スライダー
  var thumbnailItem = "#thumbnail-list .thumbnail-item"; // サムネイル画像アイテム

  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function() {
    var index = $(thumbnailItem).index(this);
    $(this).attr("data-index", index);
  });

  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on("init", function(slick) {
    var index = $(".slide-item.slick-slide.slick-current").attr(
      "data-slick-index"
    );
    $(thumbnailItem + '[data-index="' + index + '"]').addClass(
      "thumbnail-current"
    );
  });

  //slickスライダー初期化
  $(slider).slick({
    autoplay: false,
    arrows: false,
    cssEase: "linear",
    fade: true,
    touchThreshold: 8,
    speed: 400,
    infinite: false //これはつけましょう。
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on("mouseover", function() {
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo", index, false);
  });

  //サムネイル画像のカレントを切り替え
  $(slider).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(thumbnailItem).each(function() {
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem + '[data-index="' + nextSlide + '"]').addClass(
      "thumbnail-current"
    );
  });
});

$(function() {
  var SPslider = "#sp-slider"; // スライダー
  var SPthumbnailItem = "#sp-thumbnail-list .sp-thumbnail-item"; // サムネイル画像アイテム

  // サムネイル画像アイテムに data-index でindex番号を付与
  $(SPthumbnailItem).each(function() {
    var index = $(SPthumbnailItem).index(this);
    $(this).attr("data-index", index);
  });

  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(SPslider).on("init", function(slick) {
    var index = $(".sp-slide-item.slick-slide.slick-current").attr(
      "data-slick-index"
    );
    $(SPthumbnailItem + '[data-index="' + index + '"]').addClass(
      "thumbnail-current"
    );
  });

  //slickスライダー初期化
  $(SPslider).slick({
    autoplay: false,
    arrows: false,
    cssEase: "linear",
    fade: true,
    touchThreshold: 8,
    speed: 400,
    infinite: false //これはつけましょう。
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(SPthumbnailItem).on("click", function() {
    var index = $(this).attr("data-index");
    $(SPslider).slick("slickGoTo", index, false);
  });

  //サムネイル画像のカレントを切り替え
  $(SPslider).on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(SPthumbnailItem).each(function() {
      $(this).removeClass("thumbnail-current");
    });
    $(SPthumbnailItem + '[data-index="' + nextSlide + '"]').addClass(
      "thumbnail-current"
    );
  });
});

$(function() {
  $(".overlay").show();
  $.cookie("btnFlg") == "on"
    ? $(".overlay").hide()
    : $(".overlay").show(function() {
        $("body").addClass("no-scroll");
      });
  $(".overlay-close").click(function() {
    $(".overlay").fadeOut();
    $("body").removeClass("no-scroll");
    $.cookie("btnFlg", "on", { expires: 1, path: "/" }); //cookieの保存
  });
});

$(document).ready(function() {
  //スクロール禁止用関数
  function no_scroll(dom) {
    //PC用
    var scroll_event =
      "onwheel" in document
        ? "wheel"
        : "onmousewheel" in document
        ? "mousewheel"
        : "DOMMouseScroll";
    $(document).on(scroll_event, function(e) {
      e.preventDefault();
    });
    //SP用
    $(document).on("touchmove.noScroll", function(e) {
      e.preventDefault();
    });
  }

  //スクロール復活用関数
  function return_scroll() {
    //PC用
    var scroll_event =
      "onwheel" in document
        ? "wheel"
        : "onmousewheel" in document
        ? "mousewheel"
        : "DOMMouseScroll";
    $(document).off(scroll_event);
    //SP用
    $(document).off(".noScroll");
  }

  function removeSpace(txt) {
    if (txt !== "") {
      return txt.replace(/\s+/g, "");
    }
  }

  id_header__icon.click(function(e) {
    body.toggleClass("with--sidebar");
  });

  id_site_cache.click(function(e) {
    body.removeClass("with--sidebar");
  });

  class_select
    .on("click", ".placeholder", function() {
      var parent = $(this).closest(".select");
      if (!parent.hasClass("is-open")) {
        parent.addClass("is-open");
        $(".select.is-open")
          .not(parent)
          .removeClass("is-open");
      } else {
        parent.removeClass("is-open");
      }
    })
    .on("click", "ul>li", function() {
      var parent = $(this).closest(".select");
      parent
        .removeClass("is-open")
        .find(".placeholder")
        .text($(this).text());
      parent
        .find("input[type=hidden]")
        .attr("value", $(this).attr("data-value"));
    });

  var $breadcrumb = $(".breadcrumb").find("a"),
    $itemtitle = $(".item-title").find("span");

  class_menu_link.click(function() {
    id_menu.toggleClass("active");
    class_container_nubian.toggleClass("active");
    $(
      "#nav-icon,.headbarsecond,.dpmenu_brand,.dpmenu_categ,.dpmenu_sale"
    ).toggleClass("open");
  });

  // Dropdown Toggle
  class_menu_brand_a.click(function() {
    class_dpmenu_brand.toggleClass("active");

    if (class_dpmenu_brand.hasClass("active")) {
      class_dpmenu_brand.slideToggle("fast");
    } else {
      class_dpmenu_brand.slideToggle("fast");
    }

    if (
      class_dpmenu_categ.css("display") == "block" ||
      $(".dpmenu_sale").css("display") == "block"
    ) {
      $(".dpmenu_categ,.dpmenu_sale").hide();
    }

    return false;
  });

  class_menu_categ.click(function() {
    class_dpmenu_categ.toggleClass("active");

    if (class_dpmenu_categ.hasClass("active")) {
      class_dpmenu_categ.slideToggle("fast");
    } else {
      class_dpmenu_categ.slideToggle("fast");
    }

    if (
      class_dpmenu_brand.css("display") == "block" ||
      class_dpmenu_sale.css("display") == "block"
    ) {
      $(".dpmenu_brand,.dpmenu_sale").hide();
    }
    return false;
  });

  // class_dpmenu_sale_a.click(function(){
  // 	class_dpmenu_sale.toggleClass('active');

  // 	if(class_dpmenu_sale.hasClass('active')){
  // 		class_dpmenu_sale.slideToggle('fast');
  // 	}else{
  // 		class_dpmenu_sale.slideToggle('fast');
  // 	}

  // 	if (class_dpmenu_brand.css('display') == 'block' || class_dpmenu_categ.css('display') == 'block') {
  // 		$(".dpmenu_brand,.dpmenu_categ").hide();
  // 	}
  // 	return false;
  // });

  $(window).on("load resize", function() {
    if ($(window).width() >= 1200) {
      $(".dpmenu_brand,.dpmenu_sale,.dpmenu_categ").hide();
    }

    var $wwidth = $(window).width(),
      $menu = $("#menu");

    $menu.width($wwidth).css({
      left: -$wwidth
    });
  });

  // Footer Dropdown Toggle
  $("dt.fn1,dt.fn2,dt.fn3").click(function() {
    $(this)
      .next()
      .slideToggle("fast");
    $("body, html").animate({ scrollTop: $(".footer").offset().top }, 400);
  });

  // Search Toggle
  $("#headsearchtoogle,.menu-link-search").click(function() {
    $("#headsearchtoogle-block").slideToggle("fast");
    return false;
  });

  $(".searchclose").click(function() {
    if ($("#headsearchtoogle-block").css("display") == "block") {
      $("#headsearchtoogle-block").hide();
    }
    return false;
  });

  // Brand Toggle
  $(".brandtoogle").click(function() {
    $(".brandtoogle-block").slideToggle("fast");
    return false;
  });

  // Sub Category
  $(".opensub").click(function() {
    $(this)
      .next(".sub")
      .slideToggle("fast");
    return false;
  });

  var pagetop = $(".pagetop");
  pagetop.click(function() {
    $("body, html").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $(".pagetop_work").click(function() {
    $("body, html").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  lightbox.option({
    fitImagesInViewport: true,
    wrapAround: true
  });
});
