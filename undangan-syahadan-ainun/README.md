# Website Undangan Pernikahan — Syahadan Fauzi & Ainun

Website statis HTML, CSS, dan JavaScript. Dapat dipublikasikan gratis menggunakan GitHub Pages.

## Isi folder
- `index.html` — struktur dan konten undangan
- `style.css` — desain responsif Cream & Sage Green
- `script.js` — countdown, musik, personalisasi nama tamu, dan tautan RSVP
- `assets/` — tempat menyimpan foto dan musik

## Sebelum dipublikasikan
1. Ganti foto placeholder dengan foto pasangan:
   - `assets/foto-1.jpg`
   - `assets/foto-2.jpg`
   - `assets/foto-3.jpg`
   Gunakan nama file yang sama atau sesuaikan nama file di `index.html`.
2. Tambahkan file musik berformat MP3 bernama `music.mp3` ke folder `assets/`. Pastikan musik merupakan file yang Anda miliki atau berlisensi untuk digunakan.
3. Lengkapi nama orang tua di bagian profil pada `index.html`.
4. Buat Google Forms untuk RSVP. Contoh pertanyaan: Nama, konfirmasi hadir/tidak hadir, dan jumlah tamu.
5. Salin link Google Forms, lalu buka `script.js` dan ganti:
   `const RSVP_GOOGLE_FORMS_URL = "GANTI_DENGAN_LINK_GOOGLE_FORMS_ANDA";`
   dengan link Google Forms Anda.

Catatan: RSVP belum terhubung sebelum URL Google Forms dimasukkan. Google Forms menyimpan jawaban di akun Google pembuat formulir.

## Publikasi gratis dengan GitHub Pages
1. Buat/login akun di https://github.com/
2. Klik **New repository**.
3. Beri nama misalnya `undangan-syahadan-ainun`.
4. Pilih **Public**, lalu klik **Create repository**.
5. Upload seluruh isi folder ini (index.html, style.css, script.js, dan folder assets). Jangan hanya upload file ZIP.
6. Buka **Settings → Pages**.
7. Pada **Build and deployment**, pilih **Deploy from a branch**.
8. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
9. Tunggu proses publikasi. Alamat website biasanya:
   `https://USERNAME.github.io/undangan-syahadan-ainun/`

## Personalisasi nama tamu
Anda dapat menambahkan parameter `?to=` pada URL:
`https://USERNAME.github.io/undangan-syahadan-ainun/?to=Keluarga%20Bapak%20Andi`

Teks setelah `to=` akan muncul sebagai nama tamu di halaman pembuka. Spasi ditulis sebagai `%20`.

## Catatan
- Countdown menggunakan zona waktu WIB (UTC+7), menuju 26 Desember 2026 pukul 08.00 WIB.
- Musik tidak dipaksa autoplay sebelum tamu menekan tombol buka undangan karena kebijakan browser.
- Link Google Maps sudah diisi sesuai informasi yang diberikan.
- Foto dan musik tidak disertakan karena perlu menggunakan aset milik pasangan/pilihan pengguna.
- Website ini tidak memakai database atau backend berbayar.
