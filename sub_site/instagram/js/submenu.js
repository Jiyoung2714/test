// 메뉴에 있는 검색(#sbtn)을 클릭했을 때, 검색창(.search_wrap)이 왼쪽에서 오른쪽으로 나타남. 서브메뉴(.submenu_wrap)가 나타나야함
let sBtn = document.getElementById("sbtn")
let subSBtn = document.getElementById("sub_sbtn")
let searchWrap = document.querySelector(".search_wrap")
let subWrap = document.querySelector(".submenu_wrap")

function searchBtn(){
 searchWrap.style.left="70px"
 searchWrap.style.transition="all 0.3s"
 subWrap.style.display="block"
 alramWrap.style.left="-400px"}
sBtn.addEventListener("click",searchBtn)

function subsearchBtn(){
 searchWrap.style.left="-400px"
 alramWrap.style.left="-400px"
 searchWrap.style.transition="all 0.3s"
 subWrap.style.display="none"}
subSBtn.addEventListener("click",subsearchBtn)

let aBtn = document.getElementById("abtn")
let subABtn = document.getElementById("sub_abtn")
let alramWrap = document.querySelector(".alram_wrap")

function alramBtn(){
 alramWrap.style.left="70px"
 alramWrap.style.transition="all 0.3s"
 subWrap.style.display="block"
 searchWrap.style.left="-400px"}
aBtn.addEventListener("click",alramBtn)

function subalramBtn(){
 alramWrap.style.left="-400px"
 searchWrap.style.left="-400px"
 alramWrap.style.transition="all 0.3s"
 subWrap.style.display="none"}
subABtn.addEventListener("click",subalramBtn)

// 만들기 메뉴를 클릭했을 때, 만들기 창 띄우기
// 만들기 메뉴의 닫기 버튼을 클릭했을 때, 창 닫히기
// 모바일도 동일하게 만들기
let cBtn = document.getElementById("cbtn")
let subCBtn = document.getElementById("sub_cbtn")
let createWrap = document.querySelector(".create_wrap")
let CloseX = document.querySelector(".close")

function Cclick(){createWrap.style.display="block"}
function Cloclick(){createWrap.style.display="none"}
// CloseX.addEventListener("click",Cloclick)