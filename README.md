# 📸 PICTPLES — Set and Say Cheese! 🧀

**PICTPLES** adalah aplikasi *Virtual Photobooth* berbasis web yang dirancang untuk memberikan pengalaman mengambil foto estetik secara instan. Aplikasi ini memungkinkan pengguna mengambil 3 foto berurutan menggunakan kamera laptop dan menyusunnya dalam satu *frame strip* digital yang unik secara otomatis.

## 🚀 Live Demo
Akses aplikasi melalui tautan berikut:
👉 **[pictples-zahras-project2.netlify.app](https://pictples-zahras-project2.netlify.app/)**

## ✨ Fitur Utama
*   **3-Frame Capture**: Mengambil 3 foto berturut-turut dengan jeda waktu otomatis untuk berganti gaya.
*   **5 Tema Estetik**:
    *   🎨 **Memphis**: Pola geometris warna-warni yang ceria.
    *   🎸 **Rock n Roll**: Nuansa monokrom gahar dengan tipografi kustom.
    *   🍒 **Retro Red**: Vibe klasik tahun 70-an yang hangat.
    *   🎒 **Highschool**: Gaya nostalgia sekolah yang ikonik.
    *   🔥 **LNGSHOT**: Estetika K-Pop Hip-hop dengan sticker neon #SWAG.
*   **Auto Center-Crop**: Logika kamera yang otomatis memotong video *landscape* menjadi *portrait* 3:4 tanpa membuat gambar terlihat gepeng (distorsi).
*   **Unique Stickers**: Setiap tema memiliki dekorasi stiker yang berbeda di tiap kotaknya.
*   **High Resolution Download**: Hasil strip foto dapat diunduh dalam resolusi tinggi (skala 3x) untuk hasil yang jernih.

## 🛠️ Teknologi yang Digunakan
*   **React.js (Vite)**: Framework utama aplikasi.
*   **Tailwind CSS**: Styling layout dan antarmuka.
*   **html2canvas**: Library untuk mengubah elemen HTML menjadi gambar strip foto.
*   **Lucide React**: Ikonografi aplikasi.
*   **Google Fonts API**: Integrasi tipografi kustom sesuai tema.

## 📸 Cara Penggunaan
1.  Buka aplikasi dan **Izinkan akses kamera** pada browser.
2.  Pilih salah satu dari **5 tema** yang tersedia di panel bawah.
3.  Klik tombol **"AMBIL FOTO"**.
4.  Lakukan pose! Kamu memiliki waktu 3 detik untuk setiap frame foto.
5.  Setelah selesai, klik **"SIMPAN STRIP"** untuk mengunduh hasil foto ke galeri laptop.

## ⚙️ Instalasi Lokal
1. Clone repository:
   ```bash
   git clone [https://github.com/zahrasyi/PICTPLES.git](https://github.com/zahrasyi/PICTPLES.git)
   cd PICTPLES
