# TI-belajar

Platform belajar berbasis Vue + Vite untuk menampilkan daftar mata kuliah dan materi dari file HTML.

## Fitur Utama

- Halaman utama menampilkan daftar mata kuliah dalam bentuk tombol.
- Daftar mata kuliah dan materi diambil otomatis dari struktur folder `src/materi`.
- Klik materi akan membuka file HTML materi yang dipilih.

## Rule Program (Struktur Konten)

Konten materi wajib mengikuti format berikut:

`src/materi/[nama matkul]/[nama materi].html`

Contoh:

- `src/materi/Algoritma dan Pemrograman/Pengantar.html`
- `src/materi/Basis Data/Entity Relationship Diagram.html`

Ketentuan:

- Nama folder = nama mata kuliah.
- Nama file `.html` = judul materi.
- Jika folder atau file belum ada, item tidak akan muncul di daftar.

## Cara Menjalankan Proyek

Install dependency:

```sh
npm install
```

Jalankan mode development:

```sh
npm run dev
```

Build production (termasuk type-check):

```sh
npm run build
```

Jalankan unit test:

```sh
npm run test:unit
```

## Aturan Penggunaan

- Proyek ini digunakan untuk kebutuhan pembelajaran.
- Dilarang menduplikasi, memperbanyak, atau mendistribusikan materi/kode untuk keperluan komersial tanpa izin tertulis dari pemilik.
- Dilarang menghapus atribusi atau klaim kepemilikan asli dari materi yang tersedia.
