// bgm.js

const bgm = document.getElementById("bgm");
const muteBtn = document.getElementById("mute-btn");

// 初期音量設定（10%）
bgm.volume = 0.1;

// 初期状態をsessionStorageから読み込み
if (sessionStorage.getItem("muted") === "true") {
    bgm.muted = true;
    muteBtn.textContent = "🔇 ミュート解除";
}

muteBtn.addEventListener("click", () => {
    bgm.muted = !bgm.muted;
    muteBtn.textContent = bgm.muted ? "🔇 ミュート解除" : "🔊 ミュート";
    sessionStorage.setItem("muted", bgm.muted);
});
