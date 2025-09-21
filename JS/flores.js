function createFallingFlower() { 
  const flower = document.createElement('img');
  flower.src = 'IMG/caida.png';
  flower.classList.add('flower-fall');

  // Posición horizontal aleatoria
  flower.style.left = Math.random() * 100 + 'vw';

  // Tamaño aleatorio
  const size = Math.random() * 20 + 20;
  flower.style.width = size + 'px';

  // Duración aleatoria
  const duration = Math.random() * 5 + 5;
  flower.style.animationDuration = duration + 's';

  // Rotación inicial aleatoria
  flower.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.getElementById('falling-flowers').appendChild(flower);

  // Eliminar después de terminar animación
  setTimeout(() => flower.remove(), duration * 1000);
}

// Crear flores cada 300ms
setInterval(createFallingFlower, 300);

window.addEventListener("load", () => {
    const audio = document.getElementById("bg-music");
    audio.muted = false; // Quita el mute cuando la página carga
    audio.play().catch(() => {
      console.log("El navegador bloqueó la reproducción automática 😢");
    });
  });
