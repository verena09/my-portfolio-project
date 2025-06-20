// script.js

// Pastikan kode dijalankan setelah seluruh halaman HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    const ubahTeksBtn = document.getElementById('ubahTeks');
    const pesanSambutanParagraf = document.getElementById('pesanSambutan');

    if (ubahTeksBtn && pesanSambutanParagraf) {
        ubahTeksBtn.addEventListener('click', function() {
            if (pesanSambutanParagraf.textContent === '') {
                pesanSambutanParagraf.textContent = 'Halo, senang bertemu di portofolio saya!';
            } else {
                pesanSambutanParagraf.textContent = ''; // Kosongkan lagi teksnya
            }
        });
    } else {
        console.log("Tombol atau paragraf pesan tidak ditemukan di HTML.");
    }
});