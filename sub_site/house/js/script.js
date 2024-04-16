$(".con3 .menu>ul>li").click(function(){
 let Index = $(this).index()
 $(".story").eq(Index).show().siblings(".story").hide()
 $(".story").eq(Index).css("display","flex")
 $(this).addClass("con3_active").siblings().removeClass("con3_active")})

/* 
// 매개변수로 사용시
 $(".con4 .menu>ul>li").click(function(){
  let Index = $(this).index()
  $(".lank").eq(Index).show().siblings(".lank").hide()
  $(".lank").eq(Index).css("display","flex")
  $(this).addClas("con4_active").siblings().removeClass("con4_active")})
 index week, month에 class값 lank 추가하기
*/

// 클릭이벤트로 사용시 display:flex none 사용하기
$(".con4 .menu>ul>li:first-child").click(function(){
 $(".month").css("display","none")
 $(".week").css("display","flex")
 $(".con4 .menu>ul>li:first-child").addClass("con4_active").siblings().removeClass("con4_active")})

$(".con4 .menu>ul>li:last-child").click(function(){
 $(".month").css("display","flex")
 $(".week").css("display","none")
 $(".con4 .menu>ul>li:last-child").addClass("con4_active").siblings().removeClass("con4_active")})