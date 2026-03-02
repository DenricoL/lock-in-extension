function bloquearSeNecessario() {
  const host = window.location.hostname;
  const path = window.location.pathname;

  // YouTube Shorts
  if (host.includes("youtube.com") && path.startsWith("/shorts/")) {
    bloquearPagina("YouTube Shorts");
  }

  // TikTok 
  if (host.includes("tiktok.com")) {
    bloquearPagina("TikTok");
  }

  // Reels
  if (host.includes("instagram.com") && path.startsWith("/reels")) {
    bloquearPagina("Instagram Reels");
  }

  /* Twitter
  if (host.includes("twitter.com") || host.includes("x.com")) {
    bloquearPagina("Twitter/X");
  }
  */
}

function bloquearPagina(motivo) {
  document.documentElement.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-family:sans-serif;
      background:#111;
      color:white;
      text-align:center;
    ">
      <div>
        <h1>foco!!</h1>
        <img>
        <p>${motivo} está bloqueado por esta extensão.</p>
      </div>
    </div>
  `;
}

bloquearSeNecessario();

// detectar mudança de url em spa
let lastUrl = location.href;

new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    bloquearSeNecessario();
  }
}).observe(document, { subtree: true, childList: true });