$(".s2,.s3,.s4").hide()

setInterval (slide)
function slide(){
 $(".slide").delay(3000)
 $(".s1").fadeOut(2000)
 $(".s2").fadeIn(2000)
 $(".slide").delay(3000)
 $(".s2").fadeOut(2000)
 $(".s3").fadeIn(2000)
 $(".slide").delay(3000)
 $(".s3").fadeOut(2000)
 $(".s4").fadeIn(2000)
 $(".slide").delay(3000)
 $(".s4").fadeOut(2000)
 $(".s1").fadeIn(2000)
}