
document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("Audio/Music.mp3");
    audio.loop = true;
    audio.play().catch(error => {
        console.log("Trình duyệt chặn tự phát âm thanh. Vui lòng tương tác để phát nhạc.");
    });
});

