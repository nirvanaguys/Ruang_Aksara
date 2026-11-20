# 📖 RuangAksara — Perpustakaan di Hari Hujan (Rainy Day Library)

<div align="center">

![Vue.js 3](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.5+-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_%7C_Tablet_%7C_Desktop-2A6B65?style=for-the-badge)

<p align="center">
  <strong>Ruang virtual yang hangat, teduh, dan estetis untuk pencinta buku.</strong><br>
  Menghadirkan suasana membaca di sudut perpustakaan beraroma buku tua saat gerimis turun di luar jendela, dipadukan dengan presisi antarmuka modern bergaris halus <em>(Linear-precision glassmorphism)</em>.
</p>

[Fitur Utama](#-fitur-utama) • [Ketentuan Dosen](#-pemenuhan-ketentuan-wajib-dosen) • [Daftar Halaman](#-struktur-8-halaman-aplikasi-vue-router) • [Katalog Komponen](#-katalog-12-komponen-vue-terpisah) • [Desain & Warna](#-sistem-desain--token-visual) • [Panduan Menjalankan](#-panduan-instalasi--menjalankan-proyek)

---

</div>

## 📌 Tentang Proyek

**RuangAksara** adalah platform web komunitas literatur dan perpustakaan digital interaktif yang dikembangkan sebagai proyek mata kuliah **Desain Web (Semester 5)**.

Proyek ini menggabungkan dua filosofi antarmuka:
1. **Literary Neoclassicism (Terinspirasi oleh Literal.club):** Menempatkan buku fisik sebagai "pahlawan" utama antarmuka. Komponen kartu buku mensimulasikan sampul fisik lengkap dengan ketebalan punggung buku (*spine*), tekstur jilid kain, efek bayangan lipatan, serta rak buku grafis (*bookshelf spine chart*).
2. **Linear-Precision Glassmorphism (Terinspirasi oleh Linear.app):** Antarmuka yang tenang, teratur, dan elegan. Menggunakan garis batas halus berukuran 1px (*hairline border*) dengan opasitas rendah (`rgba(42, 107, 101, 0.08)`), panel kaca buram (*glassmorphic backdrop blur*), bayangan lembut bernuansa warna alam (bukan abu-abu industri), serta **Global Command Palette (`⌘ K` / `Ctrl+K`)**.

---

## 🎯 Pemenuhan Ketentuan Wajib Dosen

Seluruh 6 kriteria wajib yang ditentukan oleh dosen telah dipenuhi dan bahkan dilampaui:

| No | Kriteria Wajib Dosen | Target Minimal | Realisasi Proyek RuangAksara | Status |
|:---:|:---|:---:|:---|:---:|
| 1 | **Framework: Vue.js 3** | Wajib Vue 3 | Menggunakan **Vue 3.5+** dengan Composition API (`<script setup>`), Single File Components (SFC), reaktivitas `ref` & `computed`. | ✅ **Terpenuhi** |
| 2 | **Styling: Tailwind CSS** | Wajib Tailwind | Menggunakan **Tailwind CSS 3.4+** dengan konfigurasi tema mendalam (*extended colors, custom typography scale, glass tokens, border-radius*). | ✅ **Terpenuhi** |
| 3 | **Routing: Vue Router** | Min. 5 Halaman | Menggunakan **Vue Router 4.5+** dengan **8 Halaman Aktif** yang saling terhubung penuh dengan navigasi dinamis dan scroll behavior. | ✅ **Melampaui (8 Halaman)** |
| 4 | **Komponen Terpisah** | Min. 8 Komponen | Dibuat **12 Komponen Vue Terpisah** dalam file masing-masing dan aktif digunakan di berbagai halaman (*reusable*). | ✅ **Melampaui (12 Komponen)** |
| 5 | **Fungsionalitas Navigasi** | Navbar Berfungsi | **Desktop Glass Navbar** + **Mobile Fixed Bottom Navigation Bar** dengan indikator rute aktif, menu drawer, link profil, dan pencarian instan. | ✅ **Terpenuhi** |
| 6 | **Responsivitas Antarmuka** | HP, Tablet, Laptop | Menggunakan sistem breakpoint Tailwind (`sm:`, `md:`, `lg:`) yang diuji nyaman di layar ponsel (390px), tablet (768px), dan laptop/desktop (1024px+). | ✅ **Terpenuhi** |

---

## ✨ Fitur Utama

- 🔍 **Global Command Palette (`⌘ K` / `Ctrl+K`):** Pencarian instan untuk membuka halaman, mencari buku terpopuler, ulasan, atau klub buku tanpa mouse.
- 📚 **Simulasi Buku Fisik Realistis:** Kartu buku dengan efek punggung (*spine*), tekstur cover, tahun terbit, rating bintang, dan efek hover animasi 3D tilt.
- 📊 **Interactive Bookshelf Chart:** Grafik statistik batang visual berbentuk susunan buku di atas papan rak kayu.
- ⭕ **SVG Circular Reading Progress Ring:** Indikator melingkar pelacak target bacaan tahunan dengan kalkulasi persentase dinamis.
- 💬 **Sistem Komentar & Diskusi Real-time:** Pengguna dapat menambahkan komentar dan tanggapan langsung pada halaman detail artikel dan forum thread.
- 👥 **Lingkar Klub Buku Interaktif:** Fitur gabung/keluar klub (*toggle join state*) dengan hitungan anggota yang otomatis bertambah/berkurang, plus modal pembuatan klub baru.
- 📝 **Editor Bio Profil:** Bio pengguna yang dapat disunting langsung secara lokal.
- 🎨 **Editorial Reading Experience:** Halaman baca ulasan panjang bebas gangguan (*distraction-free*) dengan gaya cetak majalah sastra dan *drop-cap* huruf awal klasik.

---

## 🗺️ Struktur 8 Halaman Aplikasi (Vue Router)

Rute didefinisikan dalam file [`src/router/index.js`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/router/index.js):

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DAFTAR 8 RUTE RUANGAKSARA                       │
├─────┬──────────────────────┬──────────────────────┬────────────────────┤
│ No  │ Nama Halaman         │ Rute URL             │ Komponen View      │
├─────┼──────────────────────┼──────────────────────┼────────────────────┤
│ 01  │ Beranda Utama        │ /                    │ HomeView.vue       │
│ 02  │ Jelajah Tulisan      │ /jelajah             │ ExploreView.vue    │
│ 03  │ Detail Artikel / Buku│ /artikel/:id         │ ArticleDetailView  │
│ 04  │ Klub & Komunitas     │ /komunitas           │ CommunityView.vue  │
│ 05  │ Forum Diskusi        │ /diskusi             │ DiscussionView.vue │
│ 06  │ Detail Thread        │ /diskusi/:id         │ ThreadDetailView   │
│ 07  │ Profil & Rak Buku    │ /profil              │ ProfileView.vue    │
│ 08  │ Masuk / Daftar Akun  │ /masuk               │ AuthView.vue       │
└─────┴──────────────────────┴──────────────────────┴────────────────────┘
```

### Rincian Fungsionalitas Setiap Halaman:
1. **Beranda (`/`):**
   - Hero banner bertema *"Perpustakaan di Hari Hujan"*.
   - Floating Glass Stat Panel dengan statistik pembaca dan *Bookshelf Spine Chart*.
   - Grid 4 kolom buku terpopuler dalam format kartu simulasi buku fisik.
   - Grid 3 kolom tulisan segar (Resensi, Wawancara, Karya).
   - Daftar klub buku aktif dengan rincian jadwal pertemuan.

2. **Jelajah (`/jelajah`):**
   - Live Search bar dengan filter kategori cepat (*Semua, Resensi, Wawancara, Karya, Esai, Warta*).
   - Katalog kartu artikel dengan foto sampul, estimasi waktu baca, dan jumlah reaksi suka.
   - Paginasi halaman dinamis dengan indikator tombol aktif.

3. **Detail Artikel (`/artikel/:id`):**
   - Tata letak asimetris dua kolom (editorial membaca di kiri, info penulis dan buku terkait di kanan).
   - Drop-cap artistik pada paragraf pertama.
   - Tombol reaksi suka (*favorite*) dan simpan (*bookmark*) interaktif.
   - Seksi diskusi pembaca dengan formulir tambah komentar langsung.

4. **Klub & Komunitas (`/komunitas`):**
   - Filter klub berdasarkan tema (*Sastra Klasik, Puisi & Zine, Non-Fiksi*).
   - Kartu klub dengan status buku yang dibahas, jadwal, dan avatar bertumpuk.
   - Tombol gabung/tergabung dinamis dengan sinkronisasi kuota.
   - Formulir interaktif untuk mendaftarkan lingkar baca baru.
   - Panduan Adab Bertutur di RuangAksara.

5. **Forum Diskusi (`/diskusi`):**
   - Feed thread diskusi dari pembaca.
   - Sidebar topik hangat yang sedang tren (*#RealismeMagis, #HujanDanBuku, #SlowReading*).
   - Modal formulir untuk membuka topik percakapan baru.

6. **Detail Thread Diskusi (`/diskusi/:id`):**
   - Tampilan pembuka diskusi (*Original Post*) dengan info pembuat dan buku yang dibahas.
   - Daftar balasan komentar berurutan.
   - Kotak balasan interaktif untuk mengirim tanggapan langsung.
   - Kartu buku terkait yang bersangkutan di sidebar.

7. **Profil & Rak Buku (`/profil`):**
   - Header profil pengguna (*Farah Salsabila*) dengan foto profil, lencana kurator, dan bio yang dapat disunting.
   - Target membaca tahunan dengan cincin persentase SVG (*ReadingProgressRing*).
   - Statistik angka: buku dibaca (28), klub diikuti (4), ulasan terbit (16).
   - Tab navigasi rak buku virtual: *Sedang Dibaca, Selesai Dibaca, Ingin Dibaca*.

8. **Masuk / Daftar Akun (`/masuk`):**
   - Dialog otentikasi kaca dengan efek ambient blur.
   - Tab switch mulus antara "Masuk Akun" dan "Daftar Baru".
   - Integrasi tombol "Lanjutkan dengan Google" dan formulir responsif.

---

## 🧩 Katalog 12 Komponen Vue Terpisah

Semua komponen berada di folder [`src/components/`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components):

| No | File Komponen | Deskripsi & Peran |
|:---:|:---|:---|
| 1 | [`AppNavbar.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/AppNavbar.vue) | Header kaca buram (*glassmorphic*) dengan logo RuangAksara, menu rute utama, tombol pencarian `⌘ K`, CTA Gabung, dan avatar profil. |
| 2 | [`AppBottomNav.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/AppBottomNav.vue) | Bilah navigasi bawah tetap (*fixed bottom dock*) khusus layar ponsel (HP) dengan 5 ikon tab dan indikator pill aktif. |
| 3 | [`AppFooter.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/AppFooter.vue) | Footer bertema literatur dengan banner kutipan harian, tautan kategori, informasi semester, dan hak cipta. |
| 4 | [`BaseButton.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/BaseButton.vue) | Komponen tombol pill serbaguna dengan dukungan `router-link` atau `<button>`, 5 varian warna (*primary, secondary, outline, ghost, rose*), dan 3 ukuran. |
| 5 | [`CategoryChip.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/CategoryChip.vue) | Badge kategori tulisan dengan pewarnaan semantik otomatis (*Resensi: Mint, Wawancara: Blue, Warta: Sand, Karya: Rose*). |
| 6 | [`BookCard.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/BookCard.vue) | Kartu simulasi fisik buku lengkap dengan lipatan punggung buku (*spine*), teks vertikal penulis, rating bintang, dan efek hover spring 3D. |
| 7 | [`BookshelfChart.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/BookshelfChart.vue) | Visualisasi statistik rak buku grafis dengan tinggi buku bervariasi dan efek garis lipatan kain di atas papan kayu. |
| 8 | [`CommandPalette.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/CommandPalette.vue) | Modal dialog pencarian instan global yang dapat dipicu via klik atau keyboard shortcut `Cmd+K` / `Ctrl+K`. |
| 9 | [`ReadingProgressRing.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/ReadingProgressRing.vue) | Lingkaran progres membaca interaktif menggunakan SVG `stroke-dashoffset` dinamis dan angka persentase otomatis. |
| 10 | [`ClubCard.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/ClubCard.vue) | Kartu klub buku interaktif dengan jumlah anggota, info buku aktif, jadwal temu, avatar tumpuk, dan tombol *join* reaktif. |
| 11 | [`DiscussionCard.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/DiscussionCard.vue) | Kartu feed forum dengan badge kategori, pengarang thread, cuplikan isi, hitungan balasan komentar, dan jumlah suka. |
| 12 | [`CommentBox.vue`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/src/components/CommentBox.vue) | Komponen formulir komentar dengan tombol kirim cerdas (*disabled* jika kosong) dan event emit `@submitComment`. |

---

## 🎨 Sistem Desain & Token Visual

Desain dibangun berdasarkan spesifikasi detail pada [`DESIGN.md`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/DESIGN.md) dan [`IDEA.md`](file:///d:/Collage%20Life/Semester%205/DesWeb/Ruang%20Aksara/IDEA.md):

### 1. Palet Warna (Rainy Day Library)
| Token Nama | Nilai Hex / RGBA | Peran & Penggunaan |
|---|---|---|
| `primary` | `#2A6B65` | **Cozy Teal**: Aksi utama (CTA), brand accent, status aktif tab. |
| `primary-dark` | `#1F524D` | **Deep Teal**: Hover state tombol primary, bayangan spine buku. |
| `primary-light` | `#D4EBE8` | **Soft Mint**: Latar badge Resensi, glow ambient kartu. |
| `secondary` | `#5A829A` | **Cozy Slate Blue**: Indikator progres baca, badge sekunder. |
| `secondary-light`| `#D8E4ED` | **Soft Blue**: Latar badge Wawancara, avatar placeholder. |
| `tertiary` | `#D4A373` | **Warm Sand**: Aksen bintang rating, tag baru, secangkir teh. |
| `rose` | `#E8B4B0` | **Dusty Rose**: Emotive accent untuk tombol suka (*favorite*), puisi. |
| `background` | `#F5F9F8` | **Soft Minty Cream**: Latar belakang utama aplikasi (menghindari kelelahan mata). |
| `surface` | `#FFFFFF` | **Pure White**: Kartu konten, modal surface, kotak input. |
| `on-surface` | `#1A3331` | **Deep Teal-Black**: Teks utama (jauh lebih ramah di mata daripada hitam pekat). |
| `on-surface-variant`| `#5A7A76` | **Muted Teal-Gray**: Teks sekunder, metadata, nama pengarang. |
| `border-subtle` | `rgba(42, 107, 101, 0.08)` | Garis batas halus 1px khas antarmuka modern. |

### 2. Tipografi
- **Headlines, Display & Kutipan:** `Noto Serif` — Tipografi serif humanist yang memberikan kesan sastra klasik yang agung.
- **Body, Navigasi, Tombol & Input:** `Nunito Sans` — Tipografi sans-serif modern dengan aperture terbuka yang sangat nyaman dibaca di layar digital.
- **Ikonografi:** `Google Material Symbols Outlined` via CDN Google Fonts.

---

## 📁 Struktur Direktori Proyek

```
Ruang Aksara/
├── .gitignore                   # Konfigurasi pengabaian file Git (node_modules, dist, dll.)
├── DESIGN.md                    # Dokumentasi spesifikasi sistem desain
├── IDEA.md                      # Dokumen konsep awal & filosofi brand
├── README.md                    # Dokumentasi utama proyek
├── index.html                   # HTML entry point dengan CDN Google Fonts
├── package.json                 # Konfigurasi dependensi dan script npm
├── postcss.config.js            # Konfigurasi PostCSS untuk Tailwind CSS
├── tailwind.config.js           # Konfigurasi Tailwind CSS (palet, fonts, radius, shadows)
├── vite.config.js               # Konfigurasi bundler Vite dengan alias '@'
│
├── stitch_reference/            # 16 file referensi desain asli dari Google Stitch
│   ├── desktop/                 # 8 screen desktop (HTML + Screenshot + Info)
│   ├── mobile/                  # 8 screen mobile (HTML + Screenshot + Info)
│   └── manifest.json            # Manifest metadata seluruh screen
│
└── src/
    ├── App.vue                  # Root layout shell (Navbar, RouterView, BottomNav, Footer)
    ├── main.js                  # Entry point aplikasi Vue 3
    ├── style.css                # Directive Tailwind & styling drop-cap/spine
    │
    ├── components/              # 12 Komponen Vue Terpisah
    │   ├── AppBottomNav.vue
    │   ├── AppFooter.vue
    │   ├── AppNavbar.vue
    │   ├── BaseButton.vue
    │   ├── BookCard.vue
    │   ├── BookshelfChart.vue
    │   ├── CategoryChip.vue
    │   ├── ClubCard.vue
    │   ├── CommandPalette.vue
    │   ├── CommentBox.vue
    │   ├── DiscussionCard.vue
    │   └── ReadingProgressRing.vue
    │
    ├── data/                    # Mock Data Bahasa Indonesia
    │   ├── articles.json        # Data ulasan, wawancara, karya, dan esai
    │   ├── books.json           # Data katalog buku sastra Indonesia
    │   ├── clubs.json           # Data lingkar baca & klub buku
    │   ├── threads.json         # Data topik diskusi forum
    │   └── user.json            # Data profil pengguna & statistik rak buku
    │
    ├── router/
    │   └── index.js             # Definisi 8 rute Vue Router & scroll behavior
    │
    └── views/                   # 8 Halaman Utama
        ├── ArticleDetailView.vue
        ├── AuthView.vue
        ├── CommunityView.vue
        ├── DiscussionView.vue
        ├── ExploreView.vue
        ├── HomeView.vue
        ├── ProfileView.vue
        └── ThreadDetailView.vue
```

---

## 🚀 Panduan Instalasi & Menjalankan Proyek

### Prasyarat
- **Node.js:** Versi 18.x atau lebih baru (direkomendasikan Node.js LTS)
- **NPM:** Versi 9.x atau lebih baru

### Langkah-langkah:

1. **Buka Terminal di Direktori Proyek:**
   ```bash
   cd "d:\Collage Life\Semester 5\DesWeb\Ruang Aksara"
   ```

2. **Instal Dependensi (jika belum):**
   ```bash
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di: **`http://localhost:5173/`**

4. **Kompilasi Versi Produksi:**
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `dist/` (telah teruji 51 modul terkompilasi bersih tanpa error).

5. **Pratinjau Hasil Build Produksi:**
   ```bash
   npm run preview
   ```

---

## ⌨️ Pintasan Keyboard (*Keyboard Shortcuts*)

| Shortcut | Aksi |
|---|---|
| `⌘ K` / `Ctrl + K` | Membuka / Menutup **Command Palette** global |
| `Esc` | Menutup Command Palette atau Modal yang sedang terbuka |

---

<div align="center">
  <p><strong>RuangAksara</strong> — Dibuat dengan penuh dedikasi untuk Mata Kuliah Desain Web (Semester 5)</p>
  <p><em>"Ada buku yang sedang menunggumu di sudut jendela."</em></p>
</div>
