const textElement = document.getElementById('typing-text');
const fullText = "Congratulations.\nYou have earned the right.\nWhat was once gone with the print, let it be restored to humanity’s hands.";
const delay = 50; // 1文字あたりの表示速度（ミリ秒）

let i = 0;

function typeWriter() {
    if (i < fullText.length) {
        let char = fullText.charAt(i);
        if (char === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            textElement.textContent += char;
        }
        i++;
        setTimeout(typeWriter, delay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});