version: 1.0.0
name: RuangAksara
description: Ruang virtual yang hangat dan estetis untuk pencinta buku. Menggabungkan kehangatan "perpustakaan di hari hujan" dengan kehalusan interaksi modern yang magis, fokus pada objek buku, dan performa yang terasa instan.
inspiration: 
  - Literal.club: Buku adalah pahlawan. Tampilan sampul/progres yang estetis, kutipan yang indah, dan rasa memiliki komunitas.
  - Linear.app: "Subtle is better". Border 1px yang nyaris tak terlihat, bayangan berwarna (bukan abu-abu kotor), animasi spring (cubic-bezier), Command Palette (Cmd+K), dan navigasi berbasis keyboard.

# ==============================================================================
# 1. COLOR PALETTE (Rainy Day Library: Cozy Green & Blue)
# ==============================================================================
# Palet ini menggantikan terakota dengan nuansa teal, sage, dan slate blue yang menenangkan, 
# dipadukan dengan aksen "Warm Sand" agar tetap terasa hangat seperti secangkir teh di hari hujan.
colors:
  primary: "#2A6B65"          # Cozy Teal: Aksi utama, tautan penting, fokus. Hangat dan dalam.
  primary-dark: "#1F524D"     # Deep Teal: Hover state tombol primary.
  primary-light: "#D4EBE8"    # Soft Mint: Latar chip, glow halus, dekorasi.
  on-primary: "#F5F9F8"       # Off-white: Teks di atas warna primary.
  
  secondary: "#5A829A"        # Cozy Slate Blue: Progres baca, dekorasi, punggung buku variasi.
  secondary-light: "#D8E4ED"  # Soft Blue: Latar badge, avatar, hover state sekunder.
  
  tertiary: "#D4A373"         # Warm Sand: Aksen hangat (bintang rating, label "Baru", perayaan selesai baca).
  on-tertiary: "#4A3728"      # Dark Brown: Teks di atas warna tertiary (kontras aman).
  
  rose: "#E8B4B0"             # Dusty Rose: Tetap dipertahankan untuk reaksi "Suka" (ikon hati) agar ada sentuhan manusia yang hangat.
  
  background: "#F5F9F8"       # Soft Minty Cream: Dasar halaman, sangat lembut di mata.
  surface: "#FFFFFF"          # Pure Soft White: Kartu solid, input, modal.
  surface-variant: "#E8EFED"  # Soft Sage-Gray: Border halus, hover state, garis pemisah.
  
  on-surface: "#1A3331"       # Deep Teal-Black: Teks utama (lebih lembut dan cozy daripada #000000).
  on-surface-variant: "#5A7A76" # Muted Teal-Gray: Metadata, keterangan, placeholder.
  
  # Linear-inspired Glass & Effects
  glass: "rgba(255, 255, 255, 0.65)"
  glass-strong: "rgba(255, 255, 255, 0.85)"
  gradient-bg: "linear-gradient(160deg, #F5F9F8 0%, #E8F1F0 45%, #DCE8ED 100%)"
  glow-primary: "0 0 24px rgba(42, 107, 101, 0.12)"
  border-subtle: "rgba(42, 107, 101, 0.08)" # Border 1px khas Linear

# ==============================================================================
# 2. TYPOGRAPHY
# ==============================================================================
# Kombinasi klasik (Lora) dan modern-ramah (Nunito). Tracking diperketat sedikit untuk heading besar (gaya Linear).
typography:
  display:
    fontFamily: Lora
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Lora
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h2:
    fontFamily: Lora
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.3
  h3:
    fontFamily: Lora
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.4
  quote:
    fontFamily: Lora
    fontSize: 1.5rem
    fontWeight: 500
    fontStyle: italic
    lineHeight: 1.5
  body-md:
    fontFamily: Nunito
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Nunito
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Nunito
    fontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1.2
  label-sm:
    fontFamily: Nunito
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.2

# ==============================================================================
# 3. SHAPES & SPACING
# ==============================================================================
rounded:
  sm: 6px    # Sampul buku, spine (agar terlihat seperti buku fisik)
  md: 12px   # Input field, small badges
  lg: 16px   # Standard cards (klub, thread)
  xl: 24px   # Hero panels, modals, glass panels
  full: 9999px # Buttons, chips, avatars, pagination

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px

# ==============================================================================
# 4. MOTION & ANIMATION (Linear.app Physics)
# ==============================================================================
motion:
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)" # Bouncy, premium, alive
  smooth: "cubic-bezier(0.2, 0, 0, 1)"        # Elegant, smooth deceleration
  
  animations:
    card-hover: "transform: translateY(-4px); box-shadow: {colors.glow-primary}; border-color: {colors.primary-light}; transition: all 400ms {motion.spring}"
    button-hover: "transform: translateY(-1px); transition: all 200ms {motion.spring}"
    page-load: "opacity: 0 -> 1, transform: translateY(8px) -> 0; duration: 500ms {motion.smooth}"
    chart-grow: "transform: scaleY(0) -> scaleY(1); transform-origin: bottom; duration: 600ms {motion.spring}; stagger: 80ms"
    modal-open: "opacity: 0 -> 1, transform: scale(0.98) -> scale(1); duration: 250ms {motion.spring}"

# ==============================================================================
# 5. COMPONENTS SPECIFICATION
# ==============================================================================
components:
  page:
    backgroundColor: "{colors.background}"
    backgroundImage: "{colors.gradient-bg}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  
  nav-glass:
    backgroundColor: "{colors.glass-strong}"
    backdropFilter: "blur(12px) saturate(150%)"
    borderBottom: "1px solid {colors.border-subtle}"
    height: 64px
    padding: "0 24px"
    # Scroll behavior: opacity glass-strong increases slightly on scroll for readability.

  command-palette: # Linear.app inspired
    backgroundColor: "{colors.glass-strong}"
    border: "1px solid {colors.border-subtle}"
    rounded: "{rounded.lg}"
    shadow: "0 20px 40px rgba(26, 51, 49, 0.15)"
    width: "640px"
    maxHeight: "480px"
    # Trigger: Cmd+K / Ctrl+K

  hero-card:
    backgroundColor: "{colors.glass}"
    border: "1px solid rgba(255, 255, 255, 0.6)"
    rounded: "{rounded.xl}"
    padding: "48px"
    shadow: "0 8px 32px rgba(26, 51, 49, 0.06)"

  book-card: # Literal.club + DESIGN 2 CSS Book fusion
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border-subtle}"
    rounded: "{rounded.md}"
    padding: "16px"
    display: "flex"
    # Inner structure: spine (16px, rounded-sm left), cover (flex-1, inset border primary-light), pages (6px, repeating gradient)
    transition: "transform 0.4s {motion.spring}, box-shadow 0.4s ease, border-color 0.2s ease"
    # Hover: translateY(-6px), rotateY(-2deg), shadow: "{colors.glow-primary}"

  book-spine-chart:
    spineWidth: "36px"
    rounded: "{rounded.sm}"
    shelfHeight: "12px"
    shelfColor: "{colors.on-surface-variant}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 24px"
    transition: "all 0.2s {motion.spring}"
    # Hover: backgroundColor: "{colors.primary-dark}", transform: "translateY(-1px)"

  button-secondary:
    backgroundColor: "transparent"
    border: "1px solid {colors.primary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 24px"

  progress-ring: # Literal.club style
    size: "48px"
    trackColor: "{colors.surface-variant}"
    fillColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"

  chip:
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.label-sm}"
    # Variants: resensi (primary-light), wawancara (secondary-light), warta (tertiary + on-tertiary text), karya (rose)

  input-field:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.surface-variant}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 16px"
    # Focus: border-color: "{colors.primary}", box-shadow: "0 0 0 3px {colors.primary-light}"

  pagination:
    itemSize: "40px"
    rounded: "{rounded.full}"
    # Active: backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}"
    # Hover: backgroundColor: "{colors.surface-variant}"

# ==============================================================================
# 6. PAGE SPECIFICATIONS (SITE MAP)
# ==============================================================================

pages:
  beranda:
    goal: "Pengunjung paham dalam 5 detik bahwa ini adalah rumah hangat untuk pencinta buku. Aksi utama: Gabung."
    sections:
      - navbar: Sticky, glass-strong.
      - hero: Parallax minimalis. Latar gradasi + 3 orb buram (primary-light, secondary-light, tertiary). Satu hero-card di tengah dengan Judul (display), Subjudul (body-md), Tombol Gabung (primary), dan Tautan Jelajah (secondary).
      - statistik: Menempel sedikit ke atas hero (negative margin). Panel kaca dengan 3 stat-card (Angka besar Lora) dan chart-spine di sisi kanan (desktop) atau bawah (mobile).
      - tulisan-segar: Panel kaca besar. Grid book-card (3 kolom desktop, 1 mobile). 6 item per halaman dengan pagination.
      - kutipan: Teks saja, rata tengah, maksimal 720px. Carousel fade silang 500ms, berhenti saat hover/fokus.
      - klub-buku: Grid club-card (solid surface, bukan kaca). 3 item per halaman dengan pagination.
      - footer: Panel kaca tipis, satu kalimat ajakan, tombol Gabung, dan tautan legal.

  jelajah:
    goal: "Menemukan artikel/resensi dengan cepat dan nyaman."
    sections:
      - header: Judul H1, kolom pencarian (input-field dengan ikon), dan chip filter horizontal (Semua, Resensi, Wawancara, Warta, Karya).
      - content: Grid book-card yang konsisten dengan Beranda. 
      - pagination: Di bawah, tengah, dengan transisi fade + slide up saat ganti halaman. URL update (?halaman=2).

  diskusi:
    goal: "Forum dan Klub Buku yang rapi, tidak berisik, fokus pada konten."
    sections:
      - tabs: Tab "Forum Umum" dan "Klub Buku" (gaya Linear: underline bergeser dengan spring animation).
      - forum-list: Daftar card-thread. Surface solid, border subtle. Berisi: Judul thread (h3), chip genre, avatar penulis, jumlah balasan, waktu. Hover: backgroundColor surface-variant.
      - fab: Floating Action Button (button-primary, bulat, ikon '+') di pojok kanan bawah untuk "Buat Thread" (mobile: menempel di atas bottom nav).

  komunitas:
    goal: "Melihat siapa saja yang membaca, dan apa yang mereka baca."
    sections:
      - member-grid: Kartu profil mini. Avatar, Nama, Bio singkat, dan "Mini Shelf" (3 book-spine kecil yang sedang mereka baca).
      - interaksi: Tombol "Lihat Rak Lengkap" pada setiap kartu.

  profil:
    goal: "Dashboard pribadi yang memuaskan secara visual."
    sections:
      - header: Avatar besar, Nama, Bio, dan statistik ringkas (Buku Selesai, Sedang Dibaca).
      - reading-stats: Progress-ring besar untuk buku yang sedang dibaca, disertai detail "128 / 320 halaman".
      - visual-bookshelf: Rak buku interaktif dengan 3 tab (Ingin Dibaca, Sedang Dibaca, Selesai). Buku "Selesai" mendapat pita (ribbon) tertiary.
      - rekomendasi: Grid kecil "Karena kamu membaca X".

  masuk-daftar:
    goal: "Proses onboarding yang tanpa gesekan (frictionless)."
    sections:
      - layout: Satu kartu solid di tengah layar (max-width 400px), latar belakang gradasi + orb.
      - form: Input email, password, tombol primary lebar penuh. Tautan "Lupa kata sandi?" dan "Belum punya akun? Daftar".
      - microcopy: "Selamat datang kembali. Rak bukumu sudah menunggumu."

# ==============================================================================
# 7. MICROCOPY & TONE
# ==============================================================================
microcopy:
  tone: "Ramah, santai, cerdas, dan mengajak. Menggunakan 'kamu'. Hindari bahasa korporat, error message kasar, atau istilah teknis yang dingin."
  examples:
    empty-rak: "Rakmu masih tenang. Yuk, tambahkan buku pertamamu!"
    empty-diskusi: "Belum ada obrolan di sini. Mau jadi yang pertama memulai?"
    success-join: "Selamat datang di klub! Siapkan teh, kita mulai diskusinya."
    loading: "Menyusun halaman bacamu..."
    error: "Ups, sepertinya ada yang terselip. Coba muat ulang, ya."
    cmd-k-hint: "Tekan Cmd + K untuk mencari buku atau navigasi cepat"
    book-done: "Selesai! Luar biasa. Mau tulis ulasan singkat?"

# ==============================================================================
# 8. ACCESSIBILITY & PERFORMANCE
# ==============================================================================
accessibility:
  contrast: "Minimal 4.5:1 untuk teks normal, 3:1 untuk teks besar. Teks di atas kaca SELALU menggunakan {colors.on-surface}."
  focus: "Outline 2px solid {colors.primary} dengan offset 2px. Tidak pernah dihilangkan (no 'outline: none' tanpa pengganti)."
  reduced-motion: "Hormati `prefers-reduced-motion`. Matikan parallax, spring bounce, autoplay carousel, dan ganti dengan transisi opacity polos."
  keyboard: "Semua interaksi (hover, carousel, pagination) harus bisa diakses via Tab, Enter, Space, dan Panah."

performance:
  glassmorphism: "Maksimal 2 lapis kaca bertumpuk. Gunakan fallback `background: rgba(255,255,255,0.92)` jika `@supports not (backdrop-filter)`."
  fonts: "Muat Lora dan Nunito dengan `font-display: swap`."
  images: "Lazy load untuk semua sampul buku di bawah fold. Gunakan CSS-only book untuk placeholder agar tidak ada layout shift."

# ==============================================================================
# 9. DO'S AND DON'TS
# ==============================================================================
dos_and_donts:
  do:
    - "Gunakan border 1px yang halus (`border-subtle`) dikombinasikan dengan bayangan berwarna teal/cokelat sangat lembut untuk kedalaman."
    - "Terapkan animasi spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`) untuk hover kartu dan modal agar terasa 'hidup' dan premium."
    - "Fokus pada objek buku: tampilkan sampul/spine dengan proporsi yang benar, progres baca, dan metadata yang rapi."
    - "Sediakan Command Palette (Cmd+K / Ctrl+K) untuk navigasi super cepat."
    - "Gunakan palet Hijau Teal & Biru Slate ini secara konsisten. Gunakan Warm Sand hanya untuk aksen perayaan/rating."
  dont:
    - "Jangan gunakan bayangan hitam/abu-abu (#000000xx). Gunakan bayangan berwarna `rgba(26, 51, 49, 0.x)` agar terasa hangat."
    - "Jangan menumpuk lebih dari dua lapis efek kaca (glass) untuk menghindari kekacauan visual dan masalah performa."
    - "Jangan menaruh teks `on-surface-variant` di atas background `surface-variant` atau kaca (kontras akan gagal)."
    - "Jangan gunakan animasi yang berputar atau berkedip terus-menerus tanpa kontrol pengguna."
    - "Jangan menghilangkan indikator fokus keyboard demi estetika minimalis."
    - "Jangan kembali ke warna terakota/cokelat tanah sebagai warna dominan. Pertahankan nuansa 'Rainy Day Library'."

# ==============================================================================
# 10. CSS REFERENCE SNIPPETS
# ==============================================================================
css_examples:
  book-card: |
    .book-card {
      display: flex;
      background: #FFFFFF;
      border: 1px solid rgba(42, 107, 101, 0.08);
      border-radius: 12px;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
                  box-shadow 0.4s ease, 
                  border-color 0.2s ease;
    }
    .book-card:hover {
      transform: translateY(-6px) rotateY(-2deg);
      border-color: rgba(42, 107, 101, 0.2);
      box-shadow: 0 12px 32px rgba(42, 107, 101, 0.1), 0 4px 12px rgba(26, 51, 49, 0.05);
    }
  
  cmd-k-trigger: |
    .cmd-k-trigger {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(42, 107, 101, 0.15);
      border-radius: 8px;
      font-size: 0.8125rem;
      color: #5A7A76;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .cmd-k-trigger:hover {
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(42, 107, 101, 0.3);
    }
    .cmd-k-trigger kbd {
      background: #FFFFFF;
      border: 1px solid rgba(42, 107, 101, 0.2);
      border-radius: 4px;
      padding: 2px 6px;
      font-family: inherit;
      font-size: 0.75rem;
    }

  glass-panel: |
    .glass-panel {
      background: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(12px) saturate(150%);
      -webkit-backdrop-filter: blur(12px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 8px 32px rgba(26, 51, 49, 0.06);
    }
