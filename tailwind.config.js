/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Mendaftarkan font kustom agar bisa digunakan sebagai class Tailwind
          cherry: ['"Cherry Bomb One"', 'system-ui'],
          ewert: ['Ewert', 'system-ui'],
          diplomata: ['"Diplomata SC"', 'serif'],
          kavoon: ['Kavoon', 'system-ui'],
          sekuya: ['Sekuya', 'system-ui'],
          poppins: ['Poppins', 'sans-serif'],
        },
        backgroundImage: {
          // Menambahkan gambar ubin sebagai utilitas background Tailwind
          // Pastikan gambar ada di public/tiles.jpg
          'memphis-tiles': "url('/tiles.jpg')",
        },
      },
    },
    plugins: [],
  }