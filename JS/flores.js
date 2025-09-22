 const audio = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    // Cambiar icono play/pause
    function updateButton(isPlaying) {
      playBtn.innerHTML = isPlaying
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    }

    // Formato de tiempo mm:ss
    function formatTime(sec) {
      const minutes = Math.floor(sec / 60) || 0;
      const seconds = Math.floor(sec % 60) || 0;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Play / Pause
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        updateButton(true);
      } else {
        audio.pause();
        updateButton(false);
      }
    });

    // Actualizar duración
    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    // Actualizar barra
    audio.addEventListener("timeupdate", () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Reset al terminar
    audio.addEventListener("ended", () => {
      updateButton(false);
      progressBar.style.width = "0%";
      currentTimeEl.textContent = "0:00";
    });
