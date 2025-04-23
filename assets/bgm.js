// bgm.js

// 音楽の再生とミュートの状態を保持
let audio = document.getElementById('bgm');
let muteButton = document.getElementById('mute-btn');

// ページが読み込まれた時に音楽を再生する
window.onload = function () {
    // sessionStorage から音楽の再生状態を取得
    if (sessionStorage.getItem('audioMuted') === 'true') {
        audio.muted = true;
        muteButton.textContent = "🔈 ミュート解除";
    } else {
        audio.muted = false;
        muteButton.textContent = "🔊 ミュート";
        // 音楽を再生する
        audio.play().catch((error) => {
            console.log('音楽の再生に失敗しました:', error);
        });
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
