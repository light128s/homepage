console.log("bgm.js 読み込まれたよ！");

const audio = document.getElementById('bgm');
const muteBtn = document.getElementById('mute-btn');
const playBtn = document.getElementById('play-btn');

window.onload = () => {
    audio.volume = 0.2;
    
    if (localStorage.getItem('audioMuted') === 'true') {
        audio.muted = true;
        muteBtn.textContent = "🔈 ミュート解除";
    } else {
        audio.muted = false;
        muteBtn.textContent = "🔊 ミュート";
    }

    if (localStorage.getItem('audioPlaying') === 'true') {
        audio.play().catch(err => console.log("再生失敗:", err));
        playBtn.style.display = 'none';
    }
};

playBtn.onclick = () => {
    audio.play().then(() => {
        playBtn.style.display = 'none';
        localStorage.setItem('audioPlaying', 'true');
    });
};

muteBtn.onclick = () => {
    audio.muted = !audio.muted;
    localStorage.setItem('audioMuted', audio.muted ? 'true' : 'false');
    muteBtn.textContent = audio.muted ? "🔈 ミュート解除" : "🔊 ミュート";
};
