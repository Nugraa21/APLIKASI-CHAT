# Template by Nugra21 ( Ludang prasetyo nugroho )
## Sebelum kalian menjalankan jangan lupa untuk 
```bash
npm install
```
## Untuk menjalankan 
```bash
Npm run dev
```

```txt
Struktur Laporan Audit Keamanan TI: Studi Kasus Kafe Main Mai
Halaman Judul
 * Laporan Audit Keamanan Teknologi Informasi
 * Studi Kasus: Kafe Main Mai
 * Disusun oleh: [Nama Anda] / [Nama Anggota Kelompok]
 * [Nama Mata Kuliah]
 * [Nama Dosen]
 * [Nama Universitas/Program Studi]
 * [Tanggal Laporan]
Daftar Isi
Memudahkan pembaca (dan dosen Anda) untuk menavigasi laporan.
Ringkasan Eksekutif (Executive Summary)
Ini adalah bagian terpenting bagi pemilik kafe. Tulis bagian ini terakhir, namun letakkan di awal.
 * Tujuan Audit: Jelaskan secara singkat tujuan audit (misalnya, untuk mengidentifikasi celah keamanan pada jaringan, data, dan sistem di Kafe Main Mai).
 * Ringkasan Temuan Utama: Sebutkan 2-3 temuan paling kritis/berisiko tinggi secara ringkas. Contoh: "Jaringan Wi-Fi untuk pelanggan tidak terpisah dari jaringan kasir, menciptakan risiko pencurian data transaksi."
 * Ringkasan Rekomendasi Kunci: Sebutkan rekomendasi utama yang paling mendesak untuk dilakukan.
 * Kesimpulan Umum: Berikan gambaran umum mengenai tingkat keamanan kafe saat ini (misalnya, "Secara umum, tingkat kesadaran keamanan masih perlu ditingkatkan, namun beberapa praktik dasar sudah berjalan baik.").
BAB 1: PENDAHULUAN
1.1. Latar Belakang
 * Jelaskan konteks audit ini (merupakan tugas kuliah untuk mata kuliah [Nama Matkul]).
 * Jelaskan pentingnya keamanan siber bahkan untuk bisnis skala kecil seperti kafe, di mana data pelanggan (dari Wi-Fi) dan data transaksi sangat krusial.
 * Profil singkat Kafe Main Mai.
1.2. Tujuan Audit
Sebutkan secara spesifik apa yang ingin Anda capai, contohnya:
 * Mengidentifikasi kerentanan pada infrastruktur jaringan (Wi-Fi publik dan internal).
 * Mengevaluasi keamanan sistem Point of Sale (POS) atau kasir.
 * Menilai cara pengelolaan dan penyimpanan data pelanggan dan data transaksi.
 * Menganalisis keamanan fisik dari aset-aset TI (router, PC kasir, CCTV).
 * Memberikan rekomendasi yang praktis dan dapat diimplementasikan untuk meningkatkan keamanan.
1.3. Ruang Lingkup Audit
Jelaskan batasan audit Anda. Ini sangat penting.
 * Yang Termasuk (In-Scope):
   * Jaringan Wi-Fi untuk Pelanggan (Public Wi-Fi)
   * Jaringan Internal (untuk POS, CCTV, kantor)
   * Perangkat Keras: Router, Access Point, PC/Tablet Kasir, sistem CCTV.
   * Perangkat Lunak: Sistem Operasi PC Kasir, Aplikasi POS.
   * Data: Data transaksi penjualan, data login Wi-Fi pelanggan (jika ada).
   * Keamanan Fisik: Lokasi penempatan router dan PC kasir.
 * Yang Tidak Termasuk (Out-of-Scope):
   * Audit Keuangan (pemeriksaan transaksi).
   * Audit Kepatuhan terhadap regulasi spesifik (misal: PCI-DSS, kecuali jika Anda ingin membahasnya sedikit).
   * Rekayasa Sosial (Social Engineering) terhadap staf.
1.4. Metodologi Audit
Jelaskan bagaimana Anda melakukan audit.
 * Wawancara: Dengan pemilik atau staf kafe untuk memahami proses bisnis dan penggunaan TI.
 * Observasi: Pengamatan langsung terhadap tata letak fisik perangkat, proses transaksi di kasir, cara staf menggunakan sistem.
 * Pemeriksaan Teknis: Analisis konfigurasi router (jika diizinkan), pemeriksaan pembaruan sistem operasi dan antivirus pada PC kasir, pengecekan kekuatan password Wi-Fi.
 * Penggunaan Daftar Periksa (Checklist): Berdasarkan praktik terbaik keamanan siber (misalnya, merujuk secara sederhana pada kerangka kerja seperti NIST Cybersecurity Framework atau ISO 27001).
BAB 2: TEMUAN DAN REKOMENDASI
Ini adalah inti dari laporan Anda. Susun berdasarkan area/domain agar terstruktur rapi. Untuk setiap temuan, gunakan format berikut:
 * Kondisi: Fakta atau situasi yang Anda temukan di lapangan.
 * Kriteria: Standar atau praktik terbaik yang seharusnya diterapkan.
 * Risiko/Akibat: Apa dampak negatif dari perbedaan antara kondisi dan kriteria.
 * Rekomendasi: Langkah konkret yang harus diambil untuk memperbaiki kondisi.
 * Prioritas: (Kritis, Tinggi, Medium, Rendah) - untuk membantu pemilik memutuskan mana yang harus didahulukan.
Contoh Area dan Temuan:
2.1. Keamanan Jaringan
 * Temuan 1: Jaringan Wi-Fi Pelanggan dan Jaringan Kasir Tidak Terpisah.
   * Kondisi: Router hanya memancarkan satu SSID Wi-Fi yang digunakan bersama oleh pelanggan dan perangkat kasir.
   * Kriteria: Praktik terbaik keamanan merekomendasikan pemisahan total (segmentasi jaringan) antara jaringan tamu (tidak terpercaya) dan jaringan internal (terpercaya) menggunakan fitur seperti Guest Network atau VLAN.
   * Risiko: Pelanggan yang memiliki niat buruk dapat mencoba memindai dan menyerang perangkat kasir, berpotensi mencuri data transaksi atau menyebabkan gangguan layanan.
   * Rekomendasi: Aktifkan fitur "Guest Network" pada router. Jika router tidak mendukung, pertimbangkan untuk mengganti router yang memiliki fitur ini.
   * Prioritas: Kritis.
2.2. Keamanan Sistem dan Aplikasi
 * Temuan 2: Password Default pada Perangkat Router.
 * Temuan 3: Sistem Operasi atau Aplikasi Kasir Jarang Diperbarui.
2.3. Keamanan Data
 * Temuan 4: Tidak Ada Prosedur Backup Data Transaksi Secara Rutin.
 * Temuan 5: Data Login Wi-Fi Pelanggan (jika dikumpulkan) Disimpan Tanpa Enkripsi.
2.4. Keamanan Fisik
 * Temuan 6: Perangkat Router Diletakkan di Area yang Mudah Dijangkau Pelanggan.
2.5. Kebijakan dan Kesadaran Keamanan
 * Temuan 7: Staf Menggunakan Password yang Sama untuk Berbagai Keperluan.
BAB 3: RINGKASAN REKOMENDASI
Buat tabel agar semua rekomendasi mudah dilihat dalam satu halaman.
| No. | Area | Temuan | Rekomendasi | Prioritas |
|---|---|---|---|---|
| 1. | Jaringan | Wi-Fi pelanggan & kasir tidak terpisah | Aktifkan Guest Network pada router | Kritis |
| 2. | Sistem | Password router masih default | Ganti password admin router dengan password yang kuat | Tinggi |
| 3. | Data | Tidak ada backup rutin | Lakukan backup data transaksi harian ke cloud/hard disk eksternal | Tinggi |
| ... | ... | ... | ... | ... |
BAB 4: KESIMPULAN
 * Rangkum kembali kondisi keamanan TI di Kafe Main Mai secara keseluruhan.
 * Tekankan kembali pentingnya mengimplementasikan rekomendasi yang telah diberikan, terutama yang berprioritas Kritis dan Tinggi.
 * Tutup dengan kalimat positif yang mendorong perbaikan berkelanjutan.
LAMPIRAN (Opsional)
 * Daftar periksa (checklist) yang Anda gunakan saat audit.
 * Foto-foto (tanpa menampilkan data sensitif) sebagai bukti pendukung, misalnya foto router yang diletakkan di tempat terbuka.
 * Diagram jaringan sederhana (jika Anda membuatnya).
```

