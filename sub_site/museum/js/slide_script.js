var swiper = new Swiper("#banner .mySwiper", {
 loop:true,
 autoplay:{delay:2500,},
 // 옵션 값안에 새로운 옵션을 입력할 때, {}사용
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",},
 pagination: {el: ".swiper-pagination",},
});