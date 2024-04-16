let Dm = document.querySelector(".dm")
let sendWrap = document.querySelector(".send_wrap")
let SendClose = document.querySelector(".send_close")

function DmClick(){
 sendWrap.style.display="flex"}
Dm.addEventListener("click",DmClick)
function Sendclick(){
 sendWrap.style.display="none"}
SendClose.addEventListener("click",Sendclick)

let subSBtn = document.getElementById("sub_sbtn")
let searchWrap = document.querySelector(".search_wrap")
let search = 1

function searchClick(){
 if(search == 1){
 searchWrap.style.left="70px"
 searchWrap.style.transition="all 0.3s"
 alramWrap.style.left="-400px"
 search = 2}
 else if(search == 2){
  searchWrap.style.left="-400px"
 searchWrap.style.transition="all 0.3s"
 search = 1}}
subSBtn.addEventListener("click",searchClick)

let subABtn = document.getElementById("sub_abtn")
let alramWrap = document.querySelector(".alram_wrap")
let alram = 1

function alramClick(){
 if(alram == 1){
 alramWrap.style.left="70px"
 alramWrap.style.transition="all 0.3s"
 searchWrap.style.left="-400px"
 alram = 2}
 else if(alram == 2){
  alramWrap.style.left="-400px"
  alramWrap.style.transition="all 0.3s"
  alram = 1}}
 subABtn.addEventListener("click",alramClick)

let subCBtn = document.getElementById("sub_cbtn")
let createWrap = document.querySelector(".create_wrap")
let CloseX = document.querySelector(".close")

function Cclick(){
 createWrap.style.display="block"}
function Cloclick(){
 createWrap.style.display="none"}