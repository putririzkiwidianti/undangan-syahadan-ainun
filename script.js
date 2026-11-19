// === PERSONALIZATION ===
const WEDDING_DATE = "2026-12-26T08:00:00+07:00";
const RSVP_GOOGLE_FORMS_URL = "GANTI_DENGAN_LINK_GOOGLE_FORMS_ANDA";
// Personalize guest name via ?to=Nama%20Tamu
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) document.getElementById("guestName").textContent = guest;

// Countdown
const targetDate = new Date(WEDDING_DATE).getTime();
function updateCountdown(){
  const diffStart = targetDate - Date.now();
  const el = document.querySelector(".countdown");
  if(diffStart <= 0){
    if(!el.dataset.finished){el.innerHTML='<p class="body-copy">Hari bahagia telah tiba. Sampai bertemu!</p>';el.dataset.finished="true";}
    return;
  }
  let diff=diffStart;
  const days=Math.floor(diff/86400000);diff%=86400000;
  const hours=Math.floor(diff/3600000);diff%=3600000;
  const minutes=Math.floor(diff/60000);diff%=60000;
  const seconds=Math.floor(diff/1000);
  document.getElementById("days").textContent=String(days).padStart(3,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown();setInterval(updateCountdown,1000);

// Music controls (browser requires user gesture)
const audio=document.getElementById("weddingMusic");
const musicToggle=document.getElementById("musicToggle");
async function toggleMusic(){
  if(audio.paused){
    try{await audio.play();musicToggle.classList.add("playing");musicToggle.setAttribute("aria-label","Jeda musik");}
    catch(err){alert("Musik belum dapat diputar. Pastikan file assets/music.mp3.mp3 tersedia.");}
  }else{audio.pause();musicToggle.classList.remove("playing");musicToggle.setAttribute("aria-label","Putar musik");}
}
musicToggle.addEventListener("click",toggleMusic);

// Open invitation and attempt music only after user click
const openBtn=document.getElementById("openInvitation");
openBtn.addEventListener("click",async()=>{
  document.getElementById("intro").scrollIntoView({behavior:"smooth"});
  try{await audio.play();musicToggle.classList.add("playing");}catch(e){/* music playback may be blocked or unavailable */}
});

// RSVP link
const rsvpButton=document.getElementById("rsvpButton");
rsvpButton.addEventListener("click",(event)=>{
  if(!RSVP_GOOGLE_FORMS_URL||RSVP_GOOGLE_FORMS_URL.startsWith("GANTI_")){
    event.preventDefault();alert("Silakan masukkan link Google Forms RSVP pada script.js terlebih dahulu.");
  }else{rsvpButton.href=RSVP_GOOGLE_FORMS_URL;}
});
