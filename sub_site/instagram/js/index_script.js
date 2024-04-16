for(i=1; i<7; i++){
// post 안에 있는 html을 반복해서 만들어주기 위해 부모를 불러옴
let PostWrap = document.querySelector(".post_wrap")
// document == html
// html에 새로운 div를 생성하겠다. >> post 계속 반복되야하기 때문에 생성
let Post = document.createElement("div")
// 새로 생성된 div에 post라는 클래스이름을 생성해줌 >> css에서 post에 스타일을 넣어줬기 때문에 클래스이름을 동일하게 만들어서 넣어줌
Post.className = "post"
Post.innerHTML = `
<div class="id_box">
       <ul>
        <li><a href="#"><img src="./img/main_pro${i}.PNG" alt="x"><p>Insta_ID${i}</p></a></li>
        <li><span> · ${i}시간</span></li>
       </ul>
      </div>
      <!-- id_box end -->
      <div class="post_img">
       <img src="./img/post_img${i}.PNG" alt="x">
      </div>
      <!-- post_img end -->
      <div class="txt_box">
       <div class="like_box">
        <ul>
         <li>
         <img id="like" src="./img/like.png" alt="x">
         <img id="hate" src="./img/hate.png" alt="x">
         <img src="./img/comment.png" alt="x">
         <img src="./img/dm.png" alt="x">
         </li>
         <li>
         <img id="scrap" src="./img/scrap.png" alt="x">
         <img id="save" src="./img/save.png" alt="x">
         </li>
        </ul>
        <p>좋아요 <span id="num">0</span></p>
       </div>
       <!-- like_box end -->
       <div class="feed_txt">
        <p>This is the area where you enter the feed contents.</p><span>더 보기</span>
       </div>
       <!-- feed_txt end -->
       <div class="comment">
        <form action="" method="post">
         <p>댓글 모두보기</p>
         <p><input type="text" placeholder="댓글달기"><button>전송</button></p>
        </form>
       </div>
       <!-- comment end -->
      </div>
      <!-- txt_box end -->
`
PostWrap.appendChild(Post)
PostHandler(Post)}

// eventHandler >> 자바스크립트 내에서 발생된 이벤트의 방향을 조절해주는 역할
// post.innerHTML안에 있는 선택자를 불러와서 이벤트 발생
function PostHandler(Post){
 let Like = Post.querySelector("#like")
 let Hate = Post.querySelector("#hate")
 let Scrap = Post.querySelector("#scrap")
 let Save = Post.querySelector("#save")
 let Num = Post.querySelector("#num").innerText
 IntNum = parseInt(Num)

 function LikeClick(){
  Like.style.display="none"
  Hate.style.display="inline"
  IntNum++
  // Post.querySelector("#num").innerText안에 값을 담아주는 이유 >> ParseInt(Num)으로 텍스트를 숫자로 변환시켰기 때문에 출력할 때, 텍스트로 출력이 되야해서
  Post.querySelector("#num").innerText = IntNum}
 Like.addEventListener("click",LikeClick)

 function HateClick(){
  Hate.style.display="none"
  Like.style.display="inline"
  IntNum--
  Post.querySelector("#num").innerText = IntNum}
 Hate.addEventListener("click",HateClick)

 function ScrapeClick(){
  Scrap.style.display="none"
  Save.style.display="inline"
  alert("게시글이 저장되었습니다.")}
 Scrap.addEventListener("click",ScrapeClick)

 function SaveClick(){
  Scrap.style.display="inline"
  Save.style.display="none"
  alert("게시글 저장이 취소되었습니다.")}
 Save.addEventListener("click",SaveClick)}