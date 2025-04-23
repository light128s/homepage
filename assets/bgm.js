// bgm.js

// 音楽の再生とミュートの状態を保持
let audio = document.getElementById('bgm');
let muteButton = document.getElementById('mute-btn');
let playButton = document.getElementById('play-btn');

// ページが読み込まれた時に音楽を再生しない
window.onload = function () {
    // sessionStorage から音楽の再生状態を取得
    if (sessionStorage.getItem('audioMuted') === 'true') {
        audio.muted = true;
        muteButton.textContent = "🔈 ミュート解除";
    } else {
        audio.muted = false;
        muteButton.textContent = "🔊 ミュート";
    }
};

// 音楽再生ボタンのクリックイベント
playButton.onclick = function () {
    audio.play().then(() => {
        console.log("音楽が再生されました");
        playButton.style.display = 'none'; // 再生ボタンを非表示にする
    }).catch((error) => {
        console.log('音楽の再生に失敗しました:', error);
    });
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
