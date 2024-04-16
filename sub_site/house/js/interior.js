$(".con_menu>ul>li").click(function(){
 let Index = $(this).index()
 $(".m1").eq(Index).show().siblings(".m1").hide()
 $(".m1").eq(Index).css("display","flex")
 $(this).addClass("con_active").siblings().removeClass("con_active")})