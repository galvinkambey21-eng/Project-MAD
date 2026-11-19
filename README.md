# 🎓 Sistem Informasi Pengelolaan Tugas Mahasiswa (SIP-TM)

Aplikasi mobile berbasis **React Native** yang dirancang khusus untuk mempermudah mahasiswa dalam mengelola, memprioritaskan, dan melacak penyelesaian tugas-tugas akademik perkuliahan. Aplikasi ini terintegrasi langsung dengan cloud database **Google Firebase** (Cloud Firestore & Firebase Authentication), serta dilengkapi dengan sistem *fallback offline/demo* otomatis.

---

## 📱 Fitur Utama Aplikasi

1. **Dashboard & Statistik Akademik Mahasiswa**:
   - Ringkasan statistik tugas: Total Tugas, Selesai, Sedang Dikerjakan, dan Deadline Mendesak (≤ 3 hari).
   - Visualisasi persentase progres penyelesaian tugas semester berjalan.
   - Daftar tugas prioritas & deadline terdekat yang memerlukan tindakan cepat.
   - Indikator status koneksi Firebase Cloud realtime.

2. **Manajemen Tugas Lengkap (CRUD)**:
   - **Tambah Tugas**: Form lengkap mencakup judul tugas, pilihan mata kuliah (dengan opsi tambah mata kuliah baru), kategori (Individu/Kelompok), tingkat prioritas (Tinggi, Sedang, Rendah), deadline, petunjuk pengerjaan, dan catatan/link submission.
   - **Detail Tugas**: Tampilan informasi terstruktur, status pengerjaan visual, tanggal pembuatan, dan ID dokumen cloud.
   - **Edit Tugas**: Pembaruan data tugas secara real-time.
   - **Hapus Tugas**: Penghapusan tugas dengan dialog konfirmasi keamanan (*safe deletion*).

3. **Checklist Sub-Tugas (Breakdown Tasks)**:
   - Memecah tugas besar menjadi langkah-langkah kerja kecil (*action items*).
   - Centang langsung sub-tugas yang telah selesai dengan bar progres dinamis.
   - Tambah & hapus sub-tugas kapan saja.

4. **Pencarian, Filter, & Pengurutan Cerdas**:
   - **Live Search**: Pencarian instan berdasarkan judul tugas, nama mata kuliah, atau isi instruksi.
   - **Filter Status**: Filter cepat (*Semua, Belum Mulai, Dikerjakan, Selesai*).
   - **Filter Mata Kuliah**: Filter horizontal berdasarkan mata kuliah terdaftar.
   - **Sorting**: Urutkan tugas berdasarkan *Batas Waktu Terdekat (Deadline)*, *Tingkat Prioritas*, *Nama Judul*, atau *Terbaru*.

5. **Autentikasi Mahasiswa & Profil**:
   - Integrasi Firebase Authentication (Email & Password).
   - Profil mahasiswa lengkap dengan NIM, Program Studi, Semester, dan ringkasan metrik.
   - Mode Cepat / Tamu (*Instant Demo Mode*) untuk pengujian langsung tanpa perlu registrasi.

---

## 🗂️ Struktur Direktori Proyek

```
kelasmobiledev/
├── App.jsx                       # Root Application component & provider setup
├── src/
│   ├── config/
│   │   └── firebase.js           # Konfigurasi inisialisasi Firebase Cloud
│   ├── constants/
│   │   ├── theme.js              # Desain sistem: Palet warna, radius, shadows, typography
│   │   └── mockData.js           # Mock data mata kuliah & tugas mahasiswa awal
│   ├── services/
│   │   ├── authService.js        # Service Autentikasi (Firebase Auth + Fallback Demo)
│   │   └── taskService.js        # Service CRUD Firestore (Realtime listener & Sync)
│   ├── context/
│   │   ├── AuthContext.js        # Global Context State Mahasiswa & Sesi Login
│   │   └── TaskContext.js        # Global Context State Data Tugas, Filter, & Statistik
│   ├── components/
│   │   ├── Header.js             # Header navigasi & indikator status Firebase
│   │   ├── Badge.js              # Badge prioritas, status, kategori, & matkul
│   │   ├── StatCard.js           # Kartu widget statistik interaktif
│   │   ├── TaskCard.js           # Kartu tugas dengan indikator deadline & quick toggle
│   │   ├── CustomButton.js       # Reusable button dengan berbagai varian styling
│   │   └── CustomInput.js        # Reusable input text dengan validasi error
│   ├── screens/
│   │   ├── HomeScreen.js         # Halaman Beranda / Dashboard Akademik
│   │   ├── TaskListScreen.js     # Halaman Manajemen & Daftar Lengkap Tugas
│   │   ├── TaskDetailScreen.js   # Halaman Rincian Tugas & Checklist Sub-tugas
│   │   ├── TaskFormScreen.js     # Halaman Form Tambah & Edit Tugas
│   │   ├── ProfileScreen.js      # Halaman Profil Mahasiswa & Pengaturan Firebase
│   │   └── LoginScreen.js        # Halaman Login & Registrasi Mahasiswa
│   └── navigation/
│       └── AppNavigator.js       # Navigasi Native Stack antar halaman
└── package.json
```

---

## 🔥 Panduan Integrasi Firebase Sendiri

Aplikasi ini sudah siap langsung terhubung dengan Firebase Project Anda:

1. Buka [Firebase Console](https://console.firebase.google.com/) dan buat project baru (misalnya `sip-tugas-mahasiswa`).
2. Buat aplikasi baru bertipe **Web App (</>)**.
3. Buka **Firestore Database** di menu sebelah kiri:
   - Klik **Create Database**.
   - Pilih mode *Start in test mode* (atau atur aturan keamanan: `allow read, write: if true;`).
4. Buka **Authentication** di menu sebelah kiri:
   - Klik **Get Started** -> Pilih **Email/Password** -> Aktifkan toggle **Enable**.
5. Buka file konfigurasi di proyek Anda:
   📁 `src/config/firebase.js`
6. Ganti bagian `firebaseConfig` dengan kredensial dari Firebase Console Anda:
   ```javascript
   export const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "proyek-anda.firebaseapp.com",
     projectId: "proyek-anda",
     storageBucket: "proyek-anda.appspot.com",
     messagingSenderId: "123456789...",
     appId: "1:123456789:web:abcdef..."
   };
   ```
7. Terapkan aturan Firestore dari file `firestore.rules`:
   - Buka **Firestore Database -> Rules** di Firebase Console.
   - Salin isi `firestore.rules`, lalu klik **Publish**.
   - Aturan ini hanya mengizinkan operasi tugas kepada pengguna yang sudah login lewat Firebase Authentication.
8. Jalankan kembali aplikasi. Indikator status akan berubah menjadi **Firebase** (Hijau) setelah koneksi berhasil.

---

## 🚀 Cara Menjalankan Aplikasi

1. **Jalankan Metro Bundler**:
   ```bash
   npm start
   ```

2. **Jalankan di Emulator / Perangkat Android**:
   ```bash
   npm run android
   ```

3. **Jalankan di iOS (MacOS)**:
   ```bash
   npm run ios
   ```
