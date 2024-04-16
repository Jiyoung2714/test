let pTit = document.querySelector(".p_tit")
let rTit = document.querySelector(".r_tit")
let tTit = document.querySelector(".t_tit")
let Post = document.querySelector(".post")
let Reels = document.querySelector(".reels")
let Tag = document.querySelector(".tag")

function Postclick(){
 Post.style.display="flex"
 Reels.style.display="none"
 Tag.style.display="none"
 pTit.style.borderTop="3px solid #aaa"
 rTit.style.borderTop="0"
 tTit.style.borderTop="0"}
pTit.addEventListener("click",Postclick)

function Reelsclick(){
 Post.style.display="none"
 Reels.style.display="flex"
 Tag.style.display="none"
 pTit.style.borderTop="0"
 rTit.style.borderTop="3px solid #aaa"
 tTit.style.borderTop="0"}
rTit.addEventListener("click",Reelsclick)

function Tagclick(){
 Post.style.display="none"
 Reels.style.display="none"
 Tag.style.display="flex"
 pTit.style.borderTop="0"
 rTit.style.borderTop="0"
 tTit.style.borderTop="3px solid #aaa"}
tTit.addEventListener("click",Tagclick)

for(i=1; i<10; i++){
let PostBox = document.createElement("div")
PostBox.className = "post_box"
PostBox.innerHTML = `
<div class="post_img">
<img src="./img/post_img${i}.PNG" alt="x">
</div>
<!-- post_img end -->
<div class="comment">
<ul>
 <li><img src="./img/explore_heart.png" alt="x"><span>0</span></li>
 <li><img src="./img/explore_commet.png" alt="x"><span>0</span></li>
</ul>
</div>
<!-- comment end -->
`
Post.appendChild(PostBox)}

for(i=1; i<10; i++){
 let ReelsBox = document.createElement("div")
 ReelsBox.className = "reels_box"
 ReelsBox.innerHTML = `
 <div class="reels_img">
 <img src="./img/main_pro${i}.PNG" alt="x">
 </div>
 <!-- reels_img -->
 <div class="comment">
 <ul>
  <li><img src="./img/explore_heart.png" alt="x"><span>0</span></li>
  <li><img src="./img/explore_commet.png" alt="x"><span>0</span></li>
 </ul>
 </div>
 <!-- reels_comment end -->
 `
 Reels.appendChild(ReelsBox)}

for(i=1; i<10; i++){
 let TagBox = document.createElement("div")
 TagBox.className = "tag_box"
 TagBox.innerHTML = `
 <div class="tag_img">
 <img src="./img/tag_img${i}.PNG" alt="x">
</div>
<!-- tag_img end -->
<div class="comment">
 <ul>
  <li><img src="./img/explore_heart.png" alt="x"><span>0</span></li>
  <li><img src="./img/explore_commet.png" alt="x"><span>0</span></li>
 </ul>
</div>
<!-- comment end -->
 `
 Tag.appendChild(TagBox)}