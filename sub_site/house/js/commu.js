$(".con1 .menu>ul>li:nth-child(1)").click(function(){
 $(".week").css({"display":"flex"})
 $(".month").css({"display":"none"})
 $(".con1 .menu>ul>li:nth-child(1)").addClass("con1_active").siblings().removeClass("con1_active")})

$(".con1 .menu>ul>li:nth-child(2)").click(function(){
 $(".week").css({"display":"none"})
 $(".month").css({"display":"flex"})
 $(".con1 .menu>ul>li:nth-child(2)").addClass("con1_active").siblings().removeClass("con1_active")})

