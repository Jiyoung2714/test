$(".page_plus").click(function(){
 $(".page_img").css("height","auto")
 $(".page_plus").css("display","none")})


let PMenu = $(".page_menu")
let PMenuOffset = PMenu.offset().top
// 윈도우 제일 상단부터 스크롤 높이값이 900이상이 되면 PMenu의 position값이 fixed로 변경되고, 아닐 경우(900이하로 떨어질 경우) position값이 원상복귀 >> addClass // removeClass 이용
$(window).scroll(function(){
 let ScrollTop  = $(window).scrollTop()
 if(ScrollTop>1100){
  PMenu.addClass("fixed")
 }else{
  PMenu.removeClass("fixed")
 }})

$(".page_menu>ul>li").click(function(){
 $(this).addClass("page_active").siblings().removeClass("page_active")
})

// 메뉴를 클릭했을 때, 각 영역으로 부드럽게 이동
$(".page_menu>ul>li").click(function(){
 // MenuIndex 변수 안에 클릭된 순서를 저장
 let MenuIndex = $(this).index()
 // 이동될 영역을 순서대로 값을 부여함 >> 배열
 // js 0 == 1
 let pageMapp = {
  0 : $(".page"),
  1 : $("div.review"),
  2 : $(".qa_wrap"),
  3 : $(".delivery"),
  4 : $(".seller_info")
 }
 // target이라는 변수 안에 pageMapp[MenuIndex]순서를 불러와서 저장
 let Target = pageMapp[MenuIndex]
 // Target !== undefined
 // js defined 정의하다는 없음
 // js undefined는 정의하지 않음
 // !== 부정문
 // !== undefined 부정의 부정문 >> 긍정문
 if(Target !== undefined){
  $("html,body").animate({
   scrollTop:Target.offset().top
  },1000)
 }
})

// 장바구니 클릭했을 때, 확인창 띄우기
$(".cart").click(function(){
 if(confirm("장바구니를 확인하시겠습니까?")){
 window.location.href="index.html"}
 return false
})