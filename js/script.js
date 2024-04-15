// 버튼 효과
// 메뉴 클릭했을 때, data-filter에 맞게 필터링되서 정렬
// 메뉴 클릭시 active 활성화
// 클릭안된 나머지는 비활성화
$(".menu>ul>li").click(function(){
 let d = $(this).attr("data-filter");
 // attr -> attribute >> 호출하다
 // 호출된 데이터값을 this에 불러온 뒤 d라는 변수(data-filter)에 담아준다.
 $(this).addClass("active");
 // 클릭했을 때, 배경색/글자색상이 변경되야하기 때문에 addClass라는 매서드로 새로운 클래스 이름을 부여
 // addClass >> 새로운 클래스명을 부여할 때 사용
 $(this).siblings().removeClass("active");
 // 클릭한 메뉴만 active가 활성화되어야하기 때문에 나머지 자식요소는 active를 삭제
 // silblings >> 자식요소를 불러올 때 사용
 // removeClass >> 클래스 이름 삭제할 때 사용
 $(".gallery_wrap").isotope({filter:d})
 // 갤러리의 필터값을 입력(연동)
});

// setTimeout(코드,시간); >> 코드가 한번 실행되는 시간
setTimeout(function(){
 $(".gallery_wrap").isotope('layout')},100)

const grid = $('.gallery_wrap').isotope({
 itemSelector: '.gallery',
 columnWidth: '.gallery', // 너비계산할 자식요소
 transitionDuration: '0.5s'}) // 재배치 시 움직이는 속도

// let Gallery1 = document.querySelectorAll(".gallery")[0];
// let GPopup = document.querySelector(".g_popup");
// let P1 = document.querySelector(".p1");
// let P2 = document.querySelector(".p2");
// let P3 = document.querySelector(".p3");

// function G1Click(){
//  GPopup.style.display="block";
//  P1.style.display="flex";
//  P2.style.display="none"
//  P3.style.display="none"}
// Gallery1.addEventListener("click",G1Click)

// .index() >> 하위 항목을 찾아주는 매서드
$(".gallery").click(function(){
 // 갤러리를 클릭했을 때,
 let Index = $(".gallery").index($(this))
 // 여러갤러리 중 클릭된 갤러리의 항목을 찾아 this에 담은 후 index라는 변수에 저장
 $(".g_popup").css("display","block")
 $("body").css("overflow","hidden")
 $(".popup").hide().eq(Index).show()
 // 1. hide로 모든 팝업창 숨기기
 // 2. eq(gallery) >> 클릭된 갤러리가 같은 값일 때, show() >> 팝업창 출력
})

$(".p_close").click(function(){
 $(".g_popup").css("display","none")
 $("body").css("overflow","auto")
})