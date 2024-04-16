//sub_btn을 클릭했을 때, 
//submenu_wrap이 슬라이드되서 나타나야함.
//sub_btn_gr이 나타나야함.
//sub_btn은 사라져야 함.
$(".sub_btn").click(function(){
 $(".submenu_wrap").slideDown();
 $(".sub_btn").css("display","none");
 $(".sub_btn_gr").css("display","inline");});
//sub_btn_gr을 클릭했을 때, 
//submenu_wrap이 슬라이되서 사라져야함.
//sub_btn_gr이 사라져야함.
//sub_btn은 나타나야 함.
$(".sub_btn_gr").click(function(){
 $(".submenu_wrap").slideUp();
 $(".sub_btn_gr").css("display","none");
 $(".sub_btn").css("display","inline");});

// top버튼눌렀을 때, 부드럽게 스크롤하기
 $(".scroll_top").click(function(){
  $("html,body").animate({scrollTop:0},1000)})