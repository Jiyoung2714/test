for(i=1; i<13; i++){
let explorerWrap = document.querySelector(".explorer_wrap")
let Explorer = document.createElement("div")
Explorer.className = "explorer"
Explorer.innerHTML = `
<img src="./img/post_img${i}.PNG" alt="x">
<div class="comment">
 <ul>
  <li><img src="./img/explore_commet.png" alt="x"><span>0</span></li>
  <li><img src="./img/explore_heart.png" alt="x"><span>0</span></li>
 </ul>
</div>`
explorerWrap.appendChild(Explorer)}