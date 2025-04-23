// bgm.js

// 音楽の再生とミュートの状態を保持
let audio = document.getElementById('bgm');
let muteButton = document.getElementById('mute-btn');

// sessionStorage から音楽の再生状態を取得
window.onload = function () {
    if (sessionStorage.getItem('audioMuted') === 'true') {
        audio.muted = true;
        muteButton.textContent = "🔈 ミュート解除";
    } else {
        audio.muted = false;
        muteButton.textContent = "🔊 ミュート";
    }
};

// ミュートボタンのクリックイベント
muteButton.onclick = function () {
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = "🔊 ミュート";
        sessionStorage.setItem('audioMuted', 'false'); // 状態を保存
    } else {
        audio.muted = true;
        muteButton.textContent = "🔈 ミュート解除";
        sessionStorage.setItem('audioMuted', 'true'); // 状態を保存
    }
};
