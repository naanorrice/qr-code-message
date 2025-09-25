const textElement = document.getElementById('typing-text');
const fullText = "Congratulations.\nYou have earned the right.\nWhat was once gone with the print, \nlet it be restored to humanity’s hands.";
const delay = 100;   // 通常の1文字あたりの表示速度（ミリ秒）
const lineDelay = 2000; // 行を出し終わったあとに待つ時間（ミリ秒）

let i = 0;

function typeWriter() {
    if (i < fullText.length) {
        let char = fullText.charAt(i);
        if (char === '\n') {
            textElement.innerHTML += '<br>';
            i++;
            setTimeout(typeWriter, 0);
        } else if (char === '.' || char === ',') {
            textElement.innerHTML += char;
            i++;
            // 改行のときは lineDelay を使う
            setTimeout(typeWriter, lineDelay);
        } else {
            textElement.innerHTML += char;
            i++;
            setTimeout(typeWriter, delay);
        }
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     typeWriter();
// });

document.getElementById("fullscreen-btn").addEventListener("click", () => {
  const elem = document.documentElement; // ページ全体
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari用
    elem.webkitRequestFullscreen();
  }

  // 全画面に入ったらロゴを消して本文開始
  document.getElementById("logo-screen").style.display = "none";
  document.getElementById("text-screen").style.display = "flex";
  typeWriter();
});