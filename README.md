# RuangAksara — Perpustakaan di Hari Hujan (Rainy Day Library)

Website komunitas sastra dan perpustakaan digital bertema *Rainy Day Library*, dikembangkan menggunakan **Vue.js 3**, **Tailwind CSS**, dan **Vue Router** untuk pemenuhan tugas proyek mata kuliah Desain Web (Semester 5).

---

## 🎯 Ketentuan Dosen & Bukti Pemenuhan

| No | Ketentuan Dosen | Status | Realisasi Proyek |
|---|---|---|---|
| 1 | **Framework: Vue.js 3** | ✅ Terpenuhi | Menggunakan Vue 3.5+ dengan Composition API (`<script setup>`) |
| 2 | **Styling: Tailwind CSS** | ✅ Terpenuhi | Tailwind CSS 3.4+ dengan konfigurasi palet kustom (*Cozy Teal, Soft Mint, Slate Blue, Warm Sand, Dusty Rose*) |
| 3 | **Routing: Minimal 5 Halaman** | ✅ Melampaui | Dibuat **8 Halaman** aktif dengan Vue Router |
| 4 | **Komponen: Minimal 8 Komponen Terpisah** | ✅ Melampaui | Dibuat **12 Komponen Vue** terpisah dan digunakan secara aktif |
| 5 | **Navigasi: Navbar Berfungsi Penuh** | ✅ Terpenuhi | Desktop Glass Header + Mobile Fixed Bottom Navigation Bar terhubung ke setiap rute |
| 6 | **Responsivitas: HP, Tablet, Laptop** | ✅ Terpenuhi | Layout responsif dengan breakpoint mobile (390px), tablet (768px), dan laptop (1024px+) |

---

## 🗺️ Struktur 8 Halaman (Vue Router)

1. **Beranda (`/`):** Hero section hari hujan, panel statistik kaca, rak buku grafis interaktif (*spine chart*), katalog ulasan terpopuler, kutipan pekan ini, dan daftar klub buku aktif.
2. **Jelajah (`/jelajah`):** Katalog lengkap tulisan dengan live search dan filter chip kategori (Resensi, Wawancara, Karya, Esai, Warta) serta navigasi pagination.
3. **Detail Artikel (`/artikel/:id`):** Tampilan membaca editorial *distraction-free*, dropcap paragraf pertama, profil penulis, buku terkait (*book simulation card*), dan kolom tanggapan pembaca.
4. **Komunitas (`/komunitas`):** Katalog lingkar baca / klub buku tematik, detail jadwal pertemuan, buku yang sedang dibahas, avatar tumpuk anggota, tombol gabung, serta formulir pembuatan klub buku baru.
5. **Diskusi (`/diskusi`):** Forum terbuka pembaca, filter kategori topik, widget topik hangat (*trending topics*), pedoman etika bertutur, dan formulir pembuatan diskusi baru.
6. **Detail Thread (`/diskusi/:id`):** Halaman percakapan mendalam, diskusi buku terkait, tombol suka, dan sistem balasan komentar langsung.
7. **Profil & Rak Buku (`/profil`):** Personalisasi pembaca, ring progres target membaca tahunan (SVG progress ring), statistik angka, bio yang dapat disunting, dan tab rak buku virtual (*Sedang Dibaca, Selesai Dibaca, Ingin Dibaca*).
8. **Masuk / Daftar (`/masuk`):** Halaman otentikasi ramah pengguna dengan tab switch mulus antara *Masuk Akun* dan *Daftar Baru*, serta opsi integrasi Akun Google.

---

## 🧩 Katalog 12 Komponen Vue Terpisah

Semua komponen berada di folder `src/components/`:
1. `AppNavbar.vue` — Bilah navigasi atas kaca buram (*glassmorphic*) dengan logo, link menu, tombol pintasan Command Palette, tombol Gabung, dan avatar.
2. `AppBottomNav.vue` — Bilah navigasi bawah khusus tampilan mobile (HP) dengan 5 ikon rute aktif.
3. `AppFooter.vue` — Footer bertema sastra dengan kutipan harian, direktori menu, dan hak cipta.
4. `BaseButton.vue` — Komponen tombol pill serbaguna dengan berbagai varian (*primary, secondary, outline, ghost, rose*).
5. `CategoryChip.vue` — Badge kategori semantik (*Resensi, Wawancara, Warta, Karya, Esai*) dengan warna kontekstual.
6. `BookCard.vue` — Kartu simulasi fisik buku realistis lengkap dengan punggung buku (*spine*), tekstur, judul, rating, dan micro-interaction hover.
7. `BookshelfChart.vue` — Visualisasi rak buku grafis interaktif dengan tinggi batang buku proporsional.
8. `CommandPalette.vue` — Modal pencarian cepat global yang dapat dibuka kapan saja melalui tombol atau kombinasi keyboard `⌘ K` / `Ctrl+K`.
9. `ReadingProgressRing.vue` — Indikator kemajuan membaca melingkar (*circular SVG progress meter*) dengan persentase real-time.
10. `ClubCard.vue` — Kartu klub buku interaktif dengan jumlah anggota, buku aktif, jadwal, avatar tumpuk, dan tombol gabung dinamis.
11. `DiscussionCard.vue` — Kartu topik forum dengan badge kategori, informasi pembuat, ringkasan bahasan, dan jumlah reaksi suka/balasan.
12. `CommentBox.vue` — Kotak input komentar interaktif dengan integrasi penambahan komentar secara real-time.

---

## 🎨 Palet Warna & Tipografi

- **Primary (Cozy Teal):** `#2A6B65`
- **Primary Light (Soft Mint):** `#D4EBE8`
- **Secondary (Slate Blue):** `#5A829A`
- **Tertiary (Warm Sand):** `#D4A373`
- **Rose (Dusty Rose):** `#E8B4B0`
- **Background (Soft Minty Cream):** `#F5F9F8`
- **On-Surface (Deep Teal-Black):** `#1A3331`
- **Font Headline/Kutipan:** `Noto Serif`
- **Font Body/UI:** `Nunito Sans`
- **Ikon:** Google Material Symbols Outlined

---

## 🚀 Cara Menjalankan Proyek

1. **Pastikan Node.js terinstal:**
   ```bash
   node -v
   npm -v
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173/`.

3. **Membangun Versi Produksi:**
   ```bash
   npm run build
   ```
   Hasil build akan disimpan di folder `dist/`.
