// =========================================================
// PENGATURAN UNDANGAN — ubah bagian ini sesuai kebutuhan
// =========================================================
const WEDDING_DATE = "2026-12-26T08:00:00+07:00"; // WIB
const RSVP_GOOGLE_FORMS_URL = "GANTI_DENGAN_LINK_GOOGLE_FORMS_ANDA";
// Contoh personalisasi nama tamu: https://username.github.io/undangan/?to=Keluarga%20Bapak%20Andi

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) document.getElementById("guestName").textContent = guest;

const targetDate = new Date(WEDDING_DATE).getTime();
function updateCountdown() {
  const now = Date.now();
  let diff = targetDate - now;
  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = '<p class="body-copy">Hari bahagia telah tiba. Sampai bertemu!</p>';
    return;
  }
  const day = Math.floor(diff / 86400000); diff %= 86400000;
  const hour = Math.floor(diff / 3600000); diff %= 3600000;
  const minute = Math.floor(diff / 60000); diff %= 60000;
  const second = Math.floor(diff / 1000);
  document.getElementById("days").textContent = String(day).padStart(3, "0");
  document.getElementById("hours").textContent = String(hour).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minute).padStart(2, "0");
  document.getElementById("seconds").textContent = String(second).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const audio = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
async function toggleMusic() {
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.classList.add("playing");
      musicToggle.textContent = "♫";
    } catch (error) {
      alert("Musik belum tersedia. Tambahkan file assets/music.mp3 terlebih dahulu.");
    }
  } else {
    audio.pause();
    musicToggle.classList.remove("playing");
    musicToggle.textContent = "♫";
  }
}
document.getElementById("openInvitation").addEventListener("click", async () => {
  document.getElementById("cover").classList.add("opened");
  document.querySelector(".intro").scrollIntoView({behavior: "smooth"});
  if (audio.querySelector("source").getAttribute("src")) {
    try { await audio.play(); musicToggle.classList.add("playing"); } catch(e) {}
  }
});
musicToggle.addEventListener("click", toggleMusic);

const rsvpButton = document.getElementById("rsvpButton");
rsvpButton.addEventListener("click", (event) => {
  if (!RSVP_GOOGLE_FORMS_URL || RSVP_GOOGLE_FORMS_URL.startsWith("GANTI_")) {
    event.preventDefault();
    alert("Atur RSVP_GOOGLE_FORMS_URL di file script.js dengan link Google Forms Anda terlebih dahulu.");
  } else {
    rsvpButton.href = RSVP_GOOGLE_FORMS_URL;
  }
});
