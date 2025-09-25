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
            setTimeout(typeWriter, lineDelay);
        } else {
            textElement.innerHTML += char;
            i++;
            // ピリオドやカンマのときに余韻を持たせる
            if (char === '.' || char === ',') {
                setTimeout(typeWriter, lineDelay);
            } else {
                setTimeout(typeWriter, delay);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 10秒間は何も表示せず、カーソルだけ点滅
    setTimeout(() => {
        typeWriter();
    }, 6000);
});
