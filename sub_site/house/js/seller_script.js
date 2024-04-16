// 취소버튼을 누르면 경고창(alert) 문구:취소되었습니다. 띄우고, 메인페이지 이동
// 메인페이지 이동은 button 태그안에 onclick으로 사용
$(".confirm>.cancle").click(function(){alert("취소되었습니다.")})

// 신청버튼을 누르면 경고창(alert) 문구:신청되었습니다. 띄우고, 메인페이지 이동
// 메인페이지 이동은 button 태그안에 onclick으로 사용
$(".confirm>.send").click(function(){alert("신청되었습니다.")})

$("#file1").change(function(){
 // val() >> 메서드는 form태그의 값을 불러오는 역할
 // #file1의 경로값을 불러와서 fileName에 저장
 let fileName = $("#file1").val()
 // input(upload1)에 fileName값을 불러옴
 $(".upload1").val(fileName)})

 // let fileName = $("#file1").val() >> val()매서드에 매개변수가 없음 >> 파일1에 있는 값을 불러와서 fileName에 저장
 //.val(fileName) >> 매서드에 매개변수가 있음 >> fileName이라고 하는 매개변수의 값을 불러옴

$("#file2").change(function(){
 let fileName2 = $("#file2").val()
 $(".upload2").val(fileName2)})

$("#file4").change(function(){
 let fileName4 = $("#file4").val()
 $(".upload4").val(fileName4)})