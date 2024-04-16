for(i=1; i<7; i++){
let reelsWrap = document.querySelector(".reels_wrap")
let reelsBox = document.createElement("div")
reelsBox.className = "reels_box"
reelsBox.innerHTML = `
<div class="reels">
<img src="./img/post_img${i}.PNG" alt="x">
<div class="reels_txt">
 <ul class="reels_id">
  <li><img src="./img/main_pro${i}.PNG" alt="x"><p>Insta_ID${i}</p></li>
  <li>·<span>팔로우</span></li>
 </ul>
 <!-- reels_id end -->
 <ul class="txt">
  <li><p>This is the area where you enter the description of the release.</p><span>더보기</span></li>
 </ul>
 <!-- txt end -->
 <ul class="reels_audio">
  <li>♫</li>
  <li>IU</li>
  <li>·</li>
  <li>Love Wins All</li>
 </ul>
 <!-- reels_audio end -->
</div>
<!-- reels_txt end -->
</div>
<!-- reels end -->
<div class="side">
<ul>
 <li><img id="like" src="./img/like.png" alt="x">
 <img id="hate" src="./img/hate.png" alt="x">
 <p id="num">0</p></li>
 <li><img src="./img/comment.png" alt="x">
 <p id="num">0</p></li>
 <li><img src="./img/dm.png" alt="x"></li>
 <li><img id="scrap" src="./img/scrap.png" alt="x"></li>
 <li><img id="save" src="./img/save.png" alt="x"></li>
 <li><p>...</p></li>
 <li><img src="./img/main_pro${i}.PNG" alt="x"></li>
</ul>
</div>
<!-- side end -->
`
reelsWrap.appendChild(reelsBox)
reelsHandler(reelsBox)}

function reelsHandler(reelsBox){
 let Like = reelsBox.querySelector("#like")
 let Hate = reelsBox.querySelector("#hate")
 let Scrap = reelsBox.querySelector("#scrap")
 let Save = reelsBox.querySelector("#save")
 let Num = reelsBox.querySelector("#num").innerText
 IntNum = parseInt(Num)

 function LikeClick(){
  Like.style.display="none"
  Hate.style.display="inline"
  IntNum++
  reelsBox.querySelector("#num").innerText = IntNum}
 Like.addEventListener("click",LikeClick)

 function HateClick(){
  Like.style.display="inline"
  Hate.style.display="none"
  IntNum--
  reelsBox.querySelector("#num").innerText = IntNum}
 Hate.addEventListener("click",HateClick)

 function ScrapClick(){
  Scrap.style.display="none"
  Save.style.display="inline"
  alert("릴스가 저장되었습니다.")}
 Scrap.addEventListener("click",ScrapClick)

 function SaveClick(){
  Scrap.style.display="inline"
  Save.style.display="none"
  alert("릴스 저장이 취소되었습니다.")}
 Save.addEventListener("click",SaveClick)}