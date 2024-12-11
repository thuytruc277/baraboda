//aos 초기화
AOS.init({
  duration: 2000,  //mọi hiệu ứng đều chậm 2s
  once: true, //chỉ hiệu ứng 1 lần khi f5 trang, lúc sroll lên xuống thì ko lặp lại
  disable: window.innerWidth < 768, //chỉ hiện ở window, ko hiện trên đt
});





//mobile menu, click .ham thì .mgnb_wrap từ bên phải chạy qua , animate 외어라
$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    right: "0"
  });
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    right: "-100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});


//2차menu depth2 - rê chuột vào thì xuất hiện
$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().fadeToggle()
});




/* khi click btn_search thì khung .search to hiện ra */
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" });
});
$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" });
});



/* visual slide */
const visual_list = new Swiper('.visual_list', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 2000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});






const landmark_list = new Swiper('.menu_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: { //768px 이상에서 
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


/* story slide */
const story_txt_list = new Swiper('.story_txt_list', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

});

const story_img_list = new Swiper('.story_img_list', {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

});


/* nhóm 2 slide ở trên để cùng chạy */
story_txt_list.controller.control = story_img_list;
story_img_list.controller.control = story_txt_list;


const prd_list = new Swiper('.prd_list', {
  centeredSlides: true, //활성화된 slide가 가운데
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: { //768px 이상에서 
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});


/* UL Ở GALERY */
$(".gallery ul li:nth-child(1)").addClass("active");
$(".gallery ul li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});