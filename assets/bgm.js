const bgm = document.getElementById("bgm");
const muteBtn = document.getElementById("mute-btn");

// 初期音量設定（10%）
bgm.volume = 0.1;

// 初期状態をsessionStorageから読み込み
if (sessionStorage.getItem("muted") === "true") {
    bgm.muted = true;
    muteBtn.textContent = "🔇 ミュート解除";
} else {
    bgm.muted = false;
    muteBtn.textContent = "🔊 ミュート";
}

// ページ遷移時にBGMが再生されるかどうかの確認
if (sessionStorage.getItem("bgmPlaying") === "true") {
    bgm.play();  // 明示的に再生する
} else {
    bgm.pause();  // 再生しない
}

// ミュートボタンのクリックイベント
muteBtn.addEventListener("click", () => {
    bgm.muted = !bgm.muted;
    muteBtn.textContent = bgm.muted ? "🔇 ミュート解除" : "🔊 ミュート";
    sessionStorage.setItem("muted", bgm.muted);
});

// BGMの再生状態をセッションストレージに保存
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem("bgmPlaying", !bgm.paused);
});
