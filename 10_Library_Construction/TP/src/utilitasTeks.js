// Fungsi untuk menghitung jumlah huruf (hanya A-Z, a-z)
function hitungHuruf(teks) {
    // Menggunakan Regular Expression (Regex) untuk mencari huruf A-Z dan a-z
    // 'g' artinya global, mencari di seluruh string, bukan cuma yang pertama
    const hurufSaja = teks.match(/[a-zA-Z]/g);
    
    // Jika ada huruf yang cocok, kembalikan panjang array-nya. Jika tidak ada (null), kembalikan 0.
    return hurufSaja ? hurufSaja.length : 0;
}

// Fungsi untuk menghitung jumlah kata
function hitungKata(teks) {
    // Menghapus spasi berlebih di awal dan akhir kalimat
    const teksBersih = teks.trim();
    
    // Jika teks kosong, jumlah kata adalah 0
    if (teksBersih === "") {
        return 0;
    }
    
    // Memecah teks berdasarkan spasi (bisa 1 spasi atau lebih) menjadi array, lalu dihitung
    const kataSaja = teksBersih.split(/\s+/);
    return kataSaja.length;
}

// Mengekspor kedua fungsi tersebut agar bisa diimpor (dipanggil) oleh file lain
module.exports = {
    hitungHuruf,
    hitungKata
};