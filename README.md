# Sistem-Pakar-Rekomendasi-Minuman-Kopi

![License](https://img.shields.io/badge/License-MIT-green.svg)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![CodeIgniter](https://img.shields.io/badge/CodeIgniter-EF4223?style=flat&logo=codeigniter&logoColor=white)

Sistem pakar berbasis web yang dirancang untuk memberikan rekomendasi minuman kopi sesuai dengan preferensi pengguna menggunakan metode **Forward Chaining**.

## 🎯 Fitur Utama
- **Sistem Rekomendasi Cerdas**: Analisis preferensi pengguna untuk merekomendasikan minuman kopi
- **Basis Pengetahuan Komprehensif**: Database berisi aturan-aturan pakar tentang karakteristik kopi
- **Forward Chaining Engine**: Proses inferensi untuk menghasilkan rekomendasi berdasarkan input pengguna
- **Antarmuka User-Friendly**: Form interaktif untuk input preferensi dan hasil rekomendasi
- **Manajemen Data Admin**: CRUD untuk data minuman, aturan, dan preferensi pengguna
- **Riwayat Rekomendasi**: Tracking riwayat rekomendasi untuk setiap pengguna

## 🛠️ Teknologi Stack
| Komponen | Teknologi |
|----------|-----------|
| **Backend** | PHP 7.4+, CodeIgniter 3 |
| **Database** | MySQL 8.0 |
| **Frontend** | HTML5, CSS3, JavaScript, Bootstrap 4 |
| **Metodologi** | Forward Chaining, Sistem Pakar |
| **Tools** | Visual Studio Code, XAMPP |

## 📂 Struktur Proyek
```
├── application/
│   ├── controllers/     # Logika aplikasi
│   ├── models/          # Model database & aturan
│   ├── views/           # Tampilan UI
│   └── libraries/       # Library Forward Chaining
├── assets/              # CSS, JS, gambar
├── system/              # Core CodeIgniter
├── uploads/             # Gambar minuman
└── database.sql         # Skema database
```

## 📋 Basis Pengetahuan
Sistem menggunakan basis aturan dengan struktur:
```php
// Contoh aturan dalam sistem
$rules = [
    [
        'if' => ['suka_manis' => true, 'tingkat_kafein' => 'rendah'],
        'then' => 'Cappuccino'
    ],
    [
        'if' => ['tingkat_asam' => 'tinggi', 'aroma' => 'buah'],
        'then' => 'Ethiopian Coffee'
    ]
];
```

## 🚀 Instalasi
1. **Clone repositori**
   ```bash
   git clone https://github.com/luqmanaru/Sistem-Pakar-Rekomendasi-Minuman-Kopi.git
   ```

2. **Konfigurasi database**
   - Impor file `database.sql` ke MySQL
   - Edit `application/config/database.php`:
     ```php
     $db['default'] = array(
         'hostname' => 'localhost',
         'username' => 'root',
         'password' => '',
         'database' => 'db_kopi_rek',
         'dbdriver' => 'mysqli'
     );
     ```

3. **Jalankan aplikasi**
   - Gunakan XAMPP/WAMP
   - Akses melalui `http://localhost/Sistem-Pakar-Rekomendasi-Minuman-Kopi`

## 📸 Tampilan Aplikasi
### Halaman Utama
<img width="1887" height="876" alt="image" src="https://github.com/user-attachments/assets/12a8ae55-ceb4-4a04-a175-73da6517505c" />

### Form Input Preferensi
<img width="1881" height="862" alt="image" src="https://github.com/user-attachments/assets/26c9227a-1131-43e0-b113-7bef7ec80423" />

### Hasil Rekomendasi
<img width="1901" height="851" alt="image" src="https://github.com/user-attachments/assets/7a4c6da9-bbcc-42eb-aab8-eb90def1a39d" />

## 🔧 Cara Kerja Sistem
1. Pengguna mengisi form preferensi (rasa, tingkat kafein, aroma, dll)
2. Sistem memproses input menggunakan mesin inferensi Forward Chaining
3. Basis pengetahuan dicocokkan dengan input pengguna
4. Sistem menghasilkan rekomendasi minuman kopi terbaik
5. Hasil ditampilkan beserta penjelasan karakteristik minuman

---

**luqmanaru**

Proyek ini dikembangkan sebagai tugas akhir mata kuliah Sistem Pakar. Sistem dirancang untuk membantu pengguna menemukan minuman kopi yang sesuai dengan preferensi pribadi mereka menggunakan pendekatan sistem pakar.
